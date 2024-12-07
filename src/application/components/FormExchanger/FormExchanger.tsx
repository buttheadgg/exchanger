import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./FormExchanger.module.scss";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import { PUBLIC_IMAGE } from "../../constants";
import FormBodyCryprtoBank from "./FormBodyCryprtoBank/FormBodyCryprtoBank";
import FormBodyCryptoCash from "./FormBodyCryptoCash/FormBodyCryptoCash";
import { ComponentData, FormExchangerInterface } from "../types/types";



const FormExchanger: FC = () => {
  const formHeaderImage = PUBLIC_IMAGE + "Main-logoImage.svg";
  const [invalidInput, setInvalidInput] = useState(false);
  
  const [formData, setFormData] = useState<FormExchangerInterface>({
    paySelect: "",
    receiveSelect: "",
  });

  const [invalidInputs, setInvalidInputs] = useState<{ [key: string]: boolean }>({
    paySelect: false,
    receiveSelect: false,
    country: false,
    city: false,
    phone: false,
    email: false,
    agreeToRules: false,
    rememberData: false
  });

  const [componentData, setComponentData] = useState<ComponentData>({});

  const handleInputChange = (name: string, value: string | boolean) => {
    setComponentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validationData = () => {
    const newValidation = { ...invalidInputs };

    if (
      !formData.paySelect ||
      isNaN(Number(formData.paySelect)) ||
      Number(formData.paySelect) < 100 ||
      Number(formData.paySelect) > 100000
    ) {
      newValidation.paySelect = true;
    } else {
      newValidation.paySelect = false;
    }

    if (
      !formData.receiveSelect ||
      isNaN(Number(formData.receiveSelect)) ||
      Number(formData.receiveSelect) < 100 ||
      Number(formData.receiveSelect) > 100000
    ) {
      newValidation.receiveSelect = true;
    } else {
      newValidation.receiveSelect = false;
    }

    if (!componentData.country) {
      newValidation.country = true;
    } else {
      newValidation.country = false;
    }

    if (!componentData.city) {
      newValidation.city = true;
    } else {
      newValidation.city = false;
    }

    if (!componentData.email) {
      newValidation.email = true; 
    } else {
      newValidation.email = false;
    }

    if (!componentData.agreeToRules) {
      newValidation.agreeToRules = true;
    } else {
      newValidation.agreeToRules = false;
    }

    setInvalidInputs(newValidation);

    return Object.values(newValidation).every((isValid) => !isValid);
  };

  const handleSubmit = () => {

    const isValid = validationData(); 

    setInvalidInput(!isValid); 

    if (validationData()) {
      const allData = { ...formData, ...componentData };
      console.log("Данные формы:", allData);
      setInvalidInput(!validationData());
      // Отправка данных
    } else {
      setInvalidInput(!validationData());
      console.log("Некорректные данные");
    }
  };

  return (
    <div className={styles.form__exchanger}>
      <div className={styles.information__line}>
        <div className={styles.information__lightBox}></div>
        <div className={styles.main__informationLogo}>
          <img src={formHeaderImage} alt="" />
        </div>
      </div>
      <div className={styles.form__wrapper}>
        <div className={styles.form__header}>
          <div className={styles.form__headerPay}>Pay</div>
          <div className={styles.form__headerReceive}>Receive</div>
        </div>
        <div className={styles.form__headerLine}></div>
        <div className={styles.form__body}>
          <div className={styles.form__pay}>
            <div className={styles.form__payValue}>
              <MyInput className={styles.form__paySelect} />
              <MyInput
                name="paySelect"
                className={styles.form__payInputValue}
                onChange={handleChange}
                placeHolder="0"
                isInvalid={invalidInputs.paySelect}
              />
            </div>
            <div className={styles.form__payLimits}>
              <div>min.: 100 EUR</div>
              <div>max.: 100000 EUR</div>
            </div>
          </div>
          <div className={styles.form__receive}>
            <div className={styles.form__receiveValue}>
              <MyInput className={styles.form__receiveSelect} />
              <MyInput
                name="receiveSelect"
                className={styles.form__receiveInputValue}
                onChange={handleChange}
                placeHolder="0"
                isInvalid={invalidInputs.receiveSelect}
              />
            </div>
          </div>
        </div>
        <FormBodyCryptoCash invalidInputs={invalidInputs} handleInputChange={handleInputChange} ></FormBodyCryptoCash>
      </div>
      <MyButton onClick={handleSubmit} className={styles.form__button}>
        EXCHANGE
      </MyButton>
      <div
        className={`${
          invalidInput
            ? styles.form__formBottomText
            : styles.form__formBottomTextNone
        }`}
      >
        The amount of cash must be at least $ 150,00
      </div>
    </div>
  );
};

export default FormExchanger;

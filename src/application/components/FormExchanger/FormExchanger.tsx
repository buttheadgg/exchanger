import React, { FC, useRef, useState } from "react";
import styles from "./FormExchanger.module.scss";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import { PUBLIC_IMAGE } from "../../constants";
import FormBodyCashStep1 from "./FormBodyCashStep1/FormBodyCashStep1";
import FormBodyCashStep2 from "./FormBodyCashStep2/FormBodyCashStep2";

interface MyData {
  paySelect: string;
  receiveSelect: string;
}

const FormExchanger: FC = () => {
  const formHeaderImage = PUBLIC_IMAGE + "Main-logoImage.svg";
  const [formData, setFormData] = useState<MyData>({
    paySelect: '',
    receiveSelect: '',
  });
  const [invalidInput, setInvalidInput] = useState(false);
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    if(formData.paySelect){
      const parsedValue = parseInt(formData.paySelect as string, 10);
      if(isNaN(parsedValue) || parseInt(formData.paySelect)  < 100 || parseInt(formData.paySelect)  > 100000 ){
        setInvalidInput(true);
        console.log(invalidInput);
      }
      else{
        setInvalidInput(false);
        console.log(invalidInput);
      }
    }
    // Валидация данных
  };

  const handleSubmit = () => {
    //Отправка данных
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
              <MyInput name="paySelect" className={`${invalidInput ? styles.form__payInvalidInput : styles.form__payInputValue}`} onChange={handleChange}  placeHolder="0" />
            </div>
            <div className={styles.form__payLimits}>
              <div>min.: 100 EUR</div>
              <div>max.: 100000 EUR</div>
            </div>
          </div>
          <div className={styles.form__receive}>
            <div className={styles.form__receiveValue}>
              <MyInput className={styles.form__receiveSelect} />
              <MyInput name="receiveSelect" className={`${invalidInput ? styles.form__receiveInvalidInput : styles.form__receiveInputValue}`} onChange={handleChange} placeHolder="0"/>
            </div>
          </div>
        </div>
        <FormBodyCashStep2></FormBodyCashStep2>
      </div>
      <MyButton onClick={handleNext} className={styles.form__button}>
        EXCHANGE
      </MyButton>
      <div className={`${invalidInput ? styles.form__formBottomText : styles.form__formBottomTextNone}`}>The amount of cash must be at least $ 150,00</div>
    </div>
  );
};

export default FormExchanger;

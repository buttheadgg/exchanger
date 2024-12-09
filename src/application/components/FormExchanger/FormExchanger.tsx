import React, { ChangeEvent, FC, useState } from "react";
import styles from "./FormExchanger.module.scss";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import { PUBLIC_IMAGE } from "../../constants";
import FormBodyCryprtoBank from "./FormBodyCryprtoBank/FormBodyCryprtoBank";
import FormBodyCryptoCash from "./FormBodyCryptoCash/FormBodyCryptoCash";
import FormBodyCashCrypto from "./FormBodyCashCrypto/FormBodyCashCrypto";
import FormBodyBankCrypto from "./FormBodyBankCrypto/FormBodyBankCrypto";
import formStore from "../stores/formStore";
import { observer } from "mobx-react-lite";

const FormExchanger: FC = observer(() => {
  const formHeaderImage = PUBLIC_IMAGE + "Main-logoImage.svg";
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formStore.updateField(name, value);
  };

  const handleSubmit = () => {
    const validationResult = formStore.validateFields();
    setIsValid(validationResult);
    if (validationResult) {
      console.log("Форма валидна, данные:", formStore.formData);
    } else {
      console.log("Ошибки валидации:", formStore.invalidInputs);
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
                isInvalid={formStore.invalidInputs.paySelect}
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
                isInvalid={formStore.invalidInputs.receiveSelect}
              />
            </div>
          </div>
        </div>
        {formStore.activeComponent === 'cashCrypto' && <FormBodyCashCrypto />}
        {formStore.activeComponent === 'bankCrypto' && <FormBodyBankCrypto />}
        {formStore.activeComponent === 'cryptoBank' && <FormBodyCryprtoBank />}
        {formStore.activeComponent === 'cryptoCash' && <FormBodyCryptoCash />}
      </div>
      <MyButton onClick={handleSubmit} className={styles.form__button}>
        EXCHANGE
      </MyButton>
      <div
        className={`${
          formStore.activeComponent === 'cashCrypto' && formStore.invalidInputs.paySelect
            ? styles.form__formBottomText
            : styles.form__formBottomTextNone
        }`}
      >
        The amount of cash must be at least $ 150,00
      </div>
    </div>
  );
});

export default FormExchanger;
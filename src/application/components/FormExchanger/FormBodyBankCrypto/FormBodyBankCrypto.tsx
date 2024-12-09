import React, { ChangeEvent, FC } from "react";
import MyInput from "../../UI/MyInput/MyInput";
import styles from "./FormBodyBankCrypto.module.scss";
import { PUBLIC_IMAGE } from "../../../constants";
import formStore from "../../stores/formStore";
import { observer } from "mobx-react-lite";


const FormBodyBankCrypto: FC = observer(({
}) => {
  const recaptchaImage = PUBLIC_IMAGE + "reCAPTCHA.svg";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formStore.updateField(name, value);
  };

  return (
    <div className={styles.form__body}>
      <div className={styles.form__bodyWrapper}>
        <div className={styles.form__pay}>
          <div className={styles.form__walletInputWrapper}>
            <p className={styles.form__walleyInputLable}>
              {" "}
              Card number*{" "}
            </p>
            <MyInput
              placeHolder="Card number"
              className={styles.form__walletInput}
              onChange={handleChange}
              name="cardNumber"
              isInvalid={formStore.invalidInputs.cardNumber}
            />
          </div>
          <div className={styles.form__payInput}>
            <p className={styles.form__payInputLable}>BTC wallet address*</p>
            <MyInput
              className={styles.form__payInputTelegram}
              placeHolder="BTC wallet address"
              onChange={handleChange}
              name="btcWalletAddress"
              isInvalid={formStore.invalidInputs.btcWalletAddress}
            />
          </div>
          <div className={styles.form__payInput}>
            <p className={styles.form__payInputLable}>Telegram</p>
            <MyInput
              className={styles.form__payInputTelegram}
              placeHolder="Telegram"
              onChange={handleChange}
              name="telegram"
            />
          </div>
        </div>
        <div className={styles.form__receive}>
          <div className={styles.form__receiveWrapper}>
            <div className={styles.form__PhoneInputWrapper}>
              <p className={styles.form__PhoneInputLabel}>Phone number</p>
              <MyInput
                className={styles.form__PhoneInput}
                placeHolder="Phone number"
                onChange={handleChange}
                name="phone"
              />
            </div>
            <div className={styles.form__EmailInputWrapper}>
              <p className={styles.form__EmailInputLabel}>E-mail*</p>
              <MyInput
                className={styles.form__EmailInput}
                placeHolder="E-mail"
                onChange={handleChange}
                name="email"
                isInvalid={formStore.invalidInputs.email}
              />
            </div>
            <div className={styles.form__receiveCheckbox}>
              <div className={styles.remember__data}>
                <input
                  type="checkbox"
                  className={styles.form__checkbox}
                  id="checkbox1"
                  name="rememberData"
                  onChange={handleChange}
                />
                <div className={styles.form__checkboxText}>
                  Do not remember data
                </div>
              </div>
              <div className={styles.agree__rules}>
                <input
                  type="checkbox"
                  className={styles.form__checkbox}
                  name="agreeToRules"
                  onChange={handleChange}
                />
                <div className={styles.form__checkboxText}>
                  By clicking the Exchange button,<br></br>I agree to the{" "}
                  <a href="#" className={styles.rulesLink}>
                    rules
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.form__reCapcha}>
        <img src={recaptchaImage} alt="captcha" />
      </div>
    </div>
  );
});

export default FormBodyBankCrypto;

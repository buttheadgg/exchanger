import React, { ChangeEvent, FC, useState } from "react";
import styles from "./FormBodyCashCrypto.module.scss";
import MyInput from "../../UI/MyInput/MyInput";
import { PUBLIC_IMAGE } from "../../../constants";
import formStore from "../../stores/formStore";
import { observer } from "mobx-react-lite";



const FormBodyCashCrypto: FC = observer(({
}) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formStore.updateField(name, value);
  };

  const recaptchaImage = PUBLIC_IMAGE + "reCAPTCHA.svg";

  return (
    <div className={styles.form__body}>
      <div className={styles.form__bodyWrapper}>
        <div className={styles.form__pay}>
          <div className={styles.form__walletInputWrapper}>
            <p className={styles.form__walleyInputLable}>
              {" "}
              Wallet Tether TRC20 for receiver*{" "}
            </p>
            <MyInput
              placeHolder="Wallet address"
              className={styles.form__walletInput}
              name="walletAddress"
              onChange={handleChange}
              isInvalid={formStore.invalidInputs.walletAddress}
            />
          </div>
          <div className={styles.form__receiveInputWrapper}>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>Country*</p>
              <MyInput
                className={styles.form__inputCountry}
                name="country"
                onChange={handleChange}
                isInvalid={formStore.invalidInputs.country}
              />
            </div>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>City*</p>
              <MyInput
                className={styles.form__inputCity}
                name="city"
                onChange={handleChange}
                isInvalid={formStore.invalidInputs.city}
              />
            </div>
          </div>
          <div className={styles.form__payInput}>
            <p className={styles.form__payInputLable}>Telegram</p>
            <MyInput
              className={styles.form__payInputTelegram}
              placeHolder="Telegram"
              name="telegram"
              onChange={handleChange}
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
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__EmailInputWrapper}>
              <p className={styles.form__EmailInputLabel}>E-mail*</p>
              <MyInput
                className={styles.form__EmailInput}
                placeHolder="E-mail"
                name="email"
                onChange={handleChange}
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

export default FormBodyCashCrypto;
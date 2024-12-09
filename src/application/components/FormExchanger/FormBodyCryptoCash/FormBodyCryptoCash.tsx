import React, { ChangeEvent, FC, useState } from "react";
import MyInput from "../../UI/MyInput/MyInput";
import { PUBLIC_IMAGE } from "../../../constants";
import styles from "./FormBodyCryptoCash.module.scss";
import { observer } from "mobx-react-lite";
import formStore from "../../stores/formStore";


const FormBodyCryptoCash: FC = observer(({
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
          <div className={styles.form__receiveInputWrapper}>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>Country*</p>
              <MyInput
                name="country"
                className={styles.form__inputCountry}
                onChange={handleChange}
                isInvalid={formStore.invalidInputs.country}
              />
            </div>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>City*</p>
              <MyInput
                name="city"
                className={styles.form__inputCity}
                onChange={handleChange}
                isInvalid={formStore.invalidInputs.city}
              />
            </div>
          </div>
          <div className={styles.form__inputNameWrapper}>
            <p className={styles.form__form__inputNameLabel}>Name</p>
            <MyInput
              name="name"
              className={styles.form__inputName}
              placeHolder="Name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.form__inputSurnameWrapper}>
            <p className={styles.form__form__inputSurnameLabel}>Last Name</p>
            <MyInput
              name="surname"
              className={styles.form__inputSurname}
              placeHolder="Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.form__receive}>
          <div className={styles.form__receiveWrapper}>
            <div className={styles.form__PhoneInputWrapper}>
              <p className={styles.form__PhoneInputLabel}>Phone number</p>
              <MyInput
                name="phone"
                className={styles.form__PhoneInput}
                placeHolder="Phone number"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__EmailInputWrapper}>
              <p className={styles.form__EmailInputLabel}>E-mail*</p>
              <MyInput
                name="email"
                className={styles.form__EmailInput}
                placeHolder="E-mail"
                onChange={handleChange}
                isInvalid={formStore.invalidInputs.email}
              />
            </div>
            <div className={styles.form__payInput}>
              <p className={styles.form__payInputLable}>Telegram</p>
              <MyInput
                name="telegram"
                className={styles.form__payInputTelegram}
                placeHolder="Telegram"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__receiveCheckbox}>
              <div className={styles.remember__data}>
                <input
                  name="rememberData"
                  type="checkbox"
                  className={styles.form__checkbox}
                  id="checkbox1"
                  onChange={handleChange}
                />
                <div className={styles.form__checkboxText}>
                  Do not remember data
                </div>
              </div>
              <div className={styles.agree__rules}>
                <input
                  name="agreeToRules"
                  type="checkbox"
                  className={styles.form__checkbox}
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

export default FormBodyCryptoCash;

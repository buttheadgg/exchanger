import React, { ChangeEvent, FC, useState } from "react";
import { PUBLIC_IMAGE } from "../../../constants";
import styles from "./FormBodyCryprtoBank.module.scss";
import MyInput from "../../UI/MyInput/MyInput";

type HandleInputChange = (name: string, value: string | boolean) => void;

interface FormBodyCryprtoBankProps {
  invalidInputs: { [key: string]: boolean };
  handleInputChange: HandleInputChange;
}

const FormBodyCryprtoBank: FC<FormBodyCryprtoBankProps> = ({
  invalidInputs,
  handleInputChange
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    handleInputChange(name, checked);
  };

  const recaptchaImage = PUBLIC_IMAGE + "reCAPTCHA.svg";

  return (
    <div className={styles.form__body}>
      <div className={styles.form__bodyWrapper}>
        <div className={styles.form__pay}>
          <div className={styles.form__receiveInputWrapper}>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>Country*</p>
              <MyInput
                className={styles.form__inputCountry}
                name="country"
                isInvalid={invalidInputs.country}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>City*</p>
              <MyInput
                className={styles.form__inputCity}
                name="city"
                isInvalid={invalidInputs.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.form__inputNameWrapper}>
            <p className={styles.form__form__inputNameLabel}>Name</p>
            <MyInput
              className={styles.form__inputName}
              placeHolder="Name"
              name="name"
              onChange={handleChange}
            ></MyInput>
          </div>
          <div className={styles.form__inputSurnameWrapper}>
            <p className={styles.form__form__inputSurnameLabel}>Last Name</p>
            <MyInput
              className={styles.form__inputSurname}
              placeHolder="Name"
              name="surname"
              onChange={handleChange}
            ></MyInput>
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
                isInvalid={invalidInputs.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__receiveCheckbox}>
              <div className={styles.remember__data}>
                <input
                  type="checkbox"
                  className={styles.form__checkbox}
                  id="checkbox1"
                  name="rememberData"
                  onChange={handleCheckboxChange}
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
                  onChange={handleCheckboxChange}
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
};

export default FormBodyCryprtoBank;

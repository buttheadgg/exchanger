import React, { FC, useState } from "react";
import { PUBLIC_IMAGE } from "../../../constants";
import styles from "./FormBodyCryprtoBank.module.scss";
import MyInput from "../../UI/MyInput/MyInput";


const FormBodyCryprtoBank = () => {
  const recaptchaImage = PUBLIC_IMAGE + "reCAPTCHA.svg";

  const [formData, setFormData] = useState({
    country: '',
    city: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    rememberData: false,
    agreeToRules: false,
  });

  const [invalidInputs, setInvalidInputs] = useState<{ [key: string]: boolean }>({
    country: false,
    city: false,
    name: false,
    surname: false,
    email: false,
    phone: false,
    rememberData: false,
    agreeToRules: false,
  });

  return (
    <div className={styles.form__body}>
      <div className={styles.form__bodyWrapper}>
        <div className={styles.form__pay}>
          <div className={styles.form__receiveInputWrapper}>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>Country*</p>
              <MyInput
                className={styles.form__inputCountryInvalid}
                name="country"
                isInvalid={invalidInputs.country}
              />
            </div>
            <div className={styles.form__receiveInput}>
              <p className={styles.form__receiveInputLable}>City*</p>
              <MyInput
                className={styles.form__inputCity}
                name="city"
                isInvalid={invalidInputs.city}
              />
            </div>
          </div>
          <div className={styles.form__inputNameWrapper}>
            <p className={styles.form__form__inputNameLabel}>Name</p>
            <MyInput
              className={styles.form__inputName}
              placeHolder="Name"
              name="name"
            ></MyInput>
          </div>
          <div className={styles.form__inputSurnameWrapper}>
            <p className={styles.form__form__inputSurnameLabel}>Last Name</p>
            <MyInput
              className={styles.form__inputSurname}
              placeHolder="Name"
              name="surname"
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
              />
            </div>
            <div className={styles.form__EmailInputWrapper}>
              <p className={styles.form__EmailInputLabel}>E-mail*</p>
              <MyInput
                className={styles.form__EmailInput}
                placeHolder="E-mail"
                name="email"

                isInvalid={invalidInputs.email}
              />
            </div>
            <div className={styles.form__receiveCheckbox}>
              <div className={styles.remember__data}>
                <input
                  type="checkbox"
                  className={styles.form__checkbox}
                  id="checkbox1"
                  name="rememberData"
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

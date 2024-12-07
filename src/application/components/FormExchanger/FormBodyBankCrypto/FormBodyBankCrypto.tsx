import React from 'react';
import MyInput from '../../UI/MyInput/MyInput';
import styles from './FormBodyBankCrypto.module.scss';
import { PUBLIC_IMAGE } from '../../../constants';

const FormBodyBankCrypto = () => {

    const recaptchaImage = PUBLIC_IMAGE + 'reCAPTCHA.svg';

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
                />
              </div>
              <div className={styles.form__payInput}>
                <p className={styles.form__payInputLable}>BTC wallet address*</p>
                <MyInput
                  className={styles.form__payInputTelegram}
                  placeHolder="BTC wallet address"
                />
              </div>
              <div className={styles.form__payInput}>
                <p className={styles.form__payInputLable}>Telegram</p>
                <MyInput
                  className={styles.form__payInputTelegram}
                  placeHolder="Telegram"
                />
              </div>
            </div>
            <div className={styles.form__receive}>
              <div className={styles.form__receiveWrapper}>
                <div className={styles.form__PhoneInputWrapper}>
                  <p className={styles.form__PhoneInputLabel}>Phone number</p>
                  <MyInput className={styles.form__PhoneInput} placeHolder="Phone number"/>
                </div>
                <div className={styles.form__EmailInputWrapper}>
                  <p className={styles.form__EmailInputLabel}>E-mail*</p>
                  <MyInput className={styles.form__EmailInput} placeHolder="E-mail"/>
                </div>
                <div className={styles.form__receiveCheckbox}>
                  <div className={styles.remember__data}>
                    <input
                      type="checkbox"
                      className={styles.form__checkbox}
                      id="checkbox1"
                    />
                    <div className={styles.form__checkboxText}>
                      Do not remember data
                    </div>
                  </div>
                  <div className={styles.agree__rules}>
                    <input type="checkbox" className={styles.form__checkbox} />
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

export default FormBodyBankCrypto;
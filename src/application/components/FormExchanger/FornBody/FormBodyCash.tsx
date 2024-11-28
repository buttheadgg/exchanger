import React from "react";
import styles from "./FormBodyCash.module.scss";
import MyInput from "../../UI/MyInput/MyInput";

const FormBodyCash = () => {
  return (
    <div className={styles.form__body}>
      <div className={styles.form__pay}>
        <div className={styles.form__payValue}>
          <MyInput className={styles.form__paySelect}/>
          <MyInput className={styles.form__payInputValue} placeHolder="0"/>
        </div>
        <div className={styles.form__payLimits}>
          <div>min.: 100 EUR</div>
          <div>max.: 100000 EUR</div>
        </div>
        <div className={styles.form__payInput}>
          <p className={styles.form__payInputLable}>Telegram</p>
          <MyInput className={styles.form__payInputTelegram} placeHolder="Telegram" />
        </div>
      </div>
      <div className={styles.form__receive}>
        <div className={styles.form__receiveValue}>
          <MyInput className={styles.form__receiveSelect}/>
          <MyInput className={styles.form__receiveInputValue}/>
        </div>
        <div className={styles.form__receiveCountry}>
          <MyInput />
          <MyInput />
        </div>
        <div className={styles.form__receiveCheckbox}>
          <div className={styles.remember__data}></div>
          <div className={styles.agree__ruls}></div>
        </div>
      </div>
    </div>
  );
};

export default FormBodyCash;

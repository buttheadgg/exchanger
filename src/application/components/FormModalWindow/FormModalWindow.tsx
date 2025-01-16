import React, { FC, useState } from "react";
import styles from "./FormModalWindow.module.scss";
import { PUBLIC_IMAGE } from "../../constants";
import MyButton from "../UI/MyButton/MyButton";
import formStore from "../../stores/formStore";
import { observer } from "mobx-react-lite";
import SliderCaptcha from "./SliderCaptcha/SliderCaptcha";

const FormModalWindow: FC = observer(() => {
  const qrImage = PUBLIC_IMAGE + "modal-qr.png";
  const [captchaDone, setCaptchaDone] = useState(false);

  const handleCaptchaSuccess = () => {
    setCaptchaDone(true);
  };

  const handleCaptchaFailure = () => {
    setCaptchaDone(false);
  };

  const handleButtonPaid = async () => {
    if (captchaDone) {
      formStore.setIsPaid(1);
      await formStore.updateField("isPayd", "yes");
      try {
        const res = await fetch("http://alfa-crypto.com/api/v1/exchange/payd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formStore.formData),
        });
        if (res.ok) {
          const timerId = setTimeout(() => {}, 1000);
          console.log(timerId);
          formStore.setIsPaid(1);
        } else {
          Error(`Ошибка передачи post payd: ${res.status}`);
        }
      } catch {}
    } else {
      alert("The Captcha has not been solved");
    }
  };

  const handleButtonCancel = () => {
    formStore.setIsPaid(2);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.modal__window}>
      <div className={styles.modal__windowWrapper}>
        <div className={styles.modal__howToPlay}>How to pay</div>
        <div className={styles.modal__canceled}>
          You have canceled the request
        </div>
        <div className={styles.modal__QrWrapper}>
          <div className={styles.qr__imageWrapper}>
            <img src={qrImage} className={styles.qr__image}></img>
          </div>
          <div className={styles.qr__text}>
            To carry out the exchange, transfer the amount specified in your
            application in Bitcoin (BTC) to this wallet
          </div>
        </div>
        <div>
          <SliderCaptcha
            onSuccess={handleCaptchaSuccess}
            onFailure={handleCaptchaFailure}
          />
        </div>
        <div className={styles.modal__afterPayment}>
          After payment. Click on the "I paid the application" button. <br></br>
          Wait for the operator to process the application
        </div>
        <div className={styles.modal__amount}>
          <div className={styles.amount__text}>
            <div className={styles.amount__textWeaving}>
              The amount of weaving
            </div>
            <div className={styles.amount__textReceived}>
              Amount to be received
            </div>
            <div className={styles.amount__textReceipt}>Receipt account</div>
          </div>
          <div className={styles.amount__value}>
            <div className={styles.amount__valueWeaving}>
              {formStore.formData.paySelect} {formStore.formData.pay}
            </div>
            <div className={styles.amount__valueReceived}>
              {formStore.formData.receiveSelect} {formStore.formData.receive}
            </div>
            <div className={styles.amount__valueReceipt}>987654567893456</div>
          </div>
        </div>
        <div className={styles.modal__beCareful}>
          Please be careful! All fields must be filled in exact accordance with
          the instructions. Otherwise, the payment may not go through.
        </div>
      </div>
      <div className={styles.modal__buttonGroup}>
        <MyButton
          className={styles.modal__buttonCancel}
          onClick={handleButtonCancel}
        >
          cancel
        </MyButton>
        <MyButton
          className={styles.modal__buttonPaid}
          onClick={handleButtonPaid}
        >
          I paid{" "}
        </MyButton>
      </div>
      <div className={styles.modal__timeStatus}>
        <div className={styles.timestatus__wrapper}>
          <div className={styles.timestatus__timeText}>Creation time</div>
          <div className={styles.timestatus__dateTime}>
            {formStore.finalData.datetime}
          </div>
        </div>
        <div className={styles.timestatus__line}></div>
        <div className={styles.timestatus__wrapper}>
          <div className={styles.timestatus__statusText}>
            Application status
          </div>
          <div className={styles.timestatus__dateTime}>
            {formStore.finalData.datetime}
          </div>
        </div>
      </div>
      <div className={styles.modal__attention}>
        Attention! Click on the "Refresh page" button if you want to activate
        the automatic page update. The page will be updated every 30 seconds
      </div>
      <button className={styles.modal__buttonRefresh} onClick={handleReload}>
        Refresh page
      </button>
      <div className={styles.modal__bottomLine}></div>
    </div>
  );
});

export default FormModalWindow;

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

  const handleButtonPaid = () => {
    if (captchaDone) {
      formStore.setIsPaid(true);
    } else {
      alert("The Captcha has not been solved");
    }
  };

  const handleButtonCancel = () => {
    formStore.setIsPaid(false);
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
              98765456789 Bitcoin BTC
            </div>
            <div className={styles.amount__valueReceived}>
              99999.01000000 Visa USD
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
            2024 - 10 - 01 19:21
          </div>
        </div>
        <div className={styles.timestatus__line}></div>
        <div className={styles.timestatus__wrapper}>
          <div className={styles.timestatus__statusText}>
            Application status
          </div>
          <div className={styles.timestatus__dateTime}>
            2024 - 10 - 01 19:21
          </div>
        </div>
      </div>
      <div className={styles.modal__attention}>
        Attention! Click on the "Refresh page" button if you want to activate
        the automatic page update. The page will be updated every 30 seconds
      </div>
      <button className={styles.modal__buttonRefresh} onClick={handleReload} >Refresh page</button>
      <div className={styles.modal__bottomLine}></div>
    </div>
  );
});

export default FormModalWindow;

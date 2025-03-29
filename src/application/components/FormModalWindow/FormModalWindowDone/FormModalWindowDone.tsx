import React, { useEffect, useState } from "react";
import styles from "./FormModalWindowDone.module.scss";
import { PUBLIC_IMAGE } from "../../../constants";
import formStore from "../../../stores/formStore";

const FormModalWindowDone = () => {
  const [isExchanged, setIsExchanged] = useState(false);

  const handleStatusCheck = async () => {
    try {
      const res = await fetch(
        "http://alfa-crypto.com/api/v1/exchange/newcheckPayd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formStore.formData),
        }
      );

      if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
      }

      const result = await res.json();

      if (result.status !== "no") {
        setIsExchanged(true);
      }
    } catch {
      console.error("Ошибка при выполнении fetch-запроса checkPayd:");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleStatusCheck();
    }, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.modal__window}>
      <div className={styles.modal__windowWrapper}>
        <div className={styles.modal__howToPlay}>Application ID 0134453</div>
        <div className={styles.modal__canceled}>
          You have canceled the request
        </div>
        <div className={styles.modal__application}>
          The application has been canceled by you.<br></br> If there is a
          transfer, contact the operator.<br></br> We are waiting for you again
          for an exchange at favorable rates
        </div>
        <div className={styles.modal__amount}>
          <div className={styles.amount__text}>
            <div className={styles.amount__textWeaving}>
              Sent
            </div>
            <div className={styles.amount__textReceived}>
            Received
            </div>
            <div className={styles.amount__textReceipt}>Transaction ID  </div>
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
          <div
            className={`${
              isExchanged
                ? styles.timestatus__dateTimeCanceledDone
                : styles.timestatus__dateTimeCanceled
            }`}
          >
            In proccess
          </div>
          <div
            className={`${
              isExchanged
                ? styles.timestatus__ExchangeDone
                : styles.timestatus__ExchangeDefault
            }`}
          >
            Done
          </div>
        </div>
      </div>
      <div
        className={`${
          isExchanged ? styles.wallet__imagesDone : styles.wallet__images
        }`}
      >
        <img
          src={PUBLIC_IMAGE + "modalWalletLeft.svg"}
          alt="left wallet"
          className={styles.wallet__imagesLeft}
        />
        <img src={PUBLIC_IMAGE + "modalWalletRight.svg"} alt="right wallet" />
      </div>
      {/* <div className={styles.modal__attention}>
        Attention! Click on the "Refresh page" button if you want to activate
        the automatic page update. The page will be updated every 30 seconds
      </div>
      <button className={styles.modal__buttonRefresh} onClick={handleReload}>
        Refresh page
      </button> */}
      <div className={styles.modal__bottomLine}></div>
    </div>
  );
};

export default FormModalWindowDone;

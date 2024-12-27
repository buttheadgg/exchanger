import React from "react";
import styles from "./PoolsModalSuccessfulFinal.module.scss";
import { PUBLIC_IMAGE } from "../../../constants";
import MyButton from "../../UI/MyButton/MyButton";
import poolsStore from "../../../stores/poolsStore";
import { observer } from "mobx-react-lite";

const PoolsModalSuccessfulFinal = () => {
  const handleButtonBack = () => {
    poolsStore.setIsConfirm(3);
  };

  const handleButtonHoldings = () => {
    poolsStore.setIsConfirm(3);
  };

  return (
    <div className={styles.window__wrapper}>
      <div className={styles.window__img}>
        <img src={PUBLIC_IMAGE + "windowSuccessImg.svg"} alt="" />
      </div>
      <div className={styles.window__body}>
        <div className={styles.body__subscription}>Subscription Successful</div>
        <div className={styles.body__value}>0.1 USDT</div>
      </div>
      <div className={styles.window__info}>
        Your cancellation is successful. Your assets will be <br></br>
        returned to your Spot Wallet immediately
      </div>
      <div className={styles.cancel__dataWrapper}>
        <div className={styles.cancel__dataText}>Est. Arrival Date</div>
        <div className={styles.cancel__dataValue}>2024 - 10 - 01 19:21</div>
      </div>
      <div className={styles.window__buttonWrapper}>
        <MyButton
          onClick={handleButtonBack}
          className={styles.window__buttonBack}
        >
          Back
        </MyButton>
        <MyButton
          onClick={handleButtonHoldings}
          className={styles.window__buttonView}
        >
          View holdings
        </MyButton>
      </div>
    </div>
  );
};

export default observer(PoolsModalSuccessfulFinal);

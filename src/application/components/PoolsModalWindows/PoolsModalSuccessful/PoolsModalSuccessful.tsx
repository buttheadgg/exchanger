import React from "react";
import styles from "./PoolsModalSuccessful.module.scss";
import { PUBLIC_IMAGE } from "../../../constants";
import MyButton from "../../UI/MyButton/MyButton";

const PoolsModalSuccessful = () => {
  return (
    <div className={styles.window__wrapper}>
      <div className={styles.window__img}>
        <img src={PUBLIC_IMAGE + "windowSuccessImg.svg"} alt="" />
      </div>
      <div className={styles.window__body}>
        <div className={styles.body__subscription}>Subscription Successful</div>
        <div className={styles.body__value}>0.1 USDT</div>
      </div>
      <div className={styles.widnow__bodyDates}>
        <div className={styles.dates__text}>
          <div>
            <img src={PUBLIC_IMAGE + "sliderWindow.svg"} alt="" />
          </div>
          <div className={styles.dates__wrapper}>
            <div className={styles.dates__sub}>Subscription Date</div>
            <div className={styles.dates__red}>Redemption Date</div>
          </div>
        </div>
        <div className={styles.dates_dates}>
          <div>2025-01-30 03:00</div>
          <div>2025-01-30 03:00</div>
        </div>
      </div>
      <div className={styles.window__buttonWrapper}>
            <MyButton className={styles.window__buttonBack}>Back</MyButton>
            <MyButton className={styles.window__buttonView}>View holdings</MyButton>
        </div>
    </div>
  );
};

export default PoolsModalSuccessful;

import React from "react";
import styles from "./PoolsModalSubscribe.module.scss";
import { PUBLIC_ICON, PUBLIC_IMAGE } from "../../../constants";

const PoolsModalSubscribe = () => {
  return (
    <div className={styles.window__wrapper}>
      <div className={styles.window__header}>
        {" "}
        <div className={styles.window__subscribe}>Subscribe</div>
        <div className={styles.window__line}>
          <div className={styles.window__lineInside}></div>
        </div>
        <div className={styles.window__productRules}>Product Rules</div>
      </div>
      <div className={styles.window__bottomLine}></div>
      <div className={styles.window__body}>
        <div className={styles.duration__wrapper}>
          <div className={styles.wrapper__durationElem}>
            <div className={styles.wrapper__durationTitle}>Flexible</div>
            <div className={styles.wrapper__durationProcent}>0.52%</div>
          </div>
          <div className={styles.wrapper__durationElem}>
            <div className={styles.wrapper__durationTitle}>Flexible</div>
            <div className={styles.wrapper__durationProcent}>0.52%</div>
            <div className={styles.wrapper__durationImg}>
              <img src={PUBLIC_ICON + "BinanceMini.svg"} alt="" />
            </div>
          </div>
          <div className={styles.wrapper__durationElem}>
            <div className={styles.wrapper__durationTitle}>Flexible</div>
            <div className={styles.wrapper__durationProcent}>0.52%</div>
            <div className={styles.wrapper__durationImg}>
              <img src={PUBLIC_ICON + "BinanceMini.svg"} alt="" />
            </div>
          </div>
          <div className={styles.wrapper__durationElem}>
            <div className={styles.wrapper__durationTitle}>Flexible</div>
            <div className={styles.wrapper__durationProcent}>0.52%</div>
            <div className={styles.wrapper__durationImg}>
              <img src={PUBLIC_ICON + "BinanceMini.svg"} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.amount__wrapper}>
          <div className={styles.amount__head}>
            {" "}
            <div className={styles.amount__text}>Amount</div>
            <div className={styles.amount__checkbox}>
              {" "}
              <input
                name="rememberData"
                type="checkbox"
                className={styles.amount__checkbox1}
                id="checkbox1"
              />
              <div className={styles.durations__checkboxText}>
                Auto-Subscribe
              </div>
            </div>
          </div>
          <div className={styles.amount__inputWrapper}>
            <input
              className={styles.amount__input}
              placeholder="Min 0.01 GMX"
            ></input>
            <button className={styles.amount__inputButton}>MAX</button>
          </div>
          <div className={styles.available__wrapper}>
            <div className={styles.available__wrapperHead}>
              <div className={styles.available__text}>
                {" "}
                Available: 30.273219 GMX from
              </div>
              <div className={styles.available__spot}>
                {" "}
                Spot & Funding Wallet
              </div>
              <div className={styles.available__arrow}>
                <img src={PUBLIC_IMAGE + "Stroke.svg"} />{" "}
              </div>
            </div>
            <div className={styles.personal}>
                <div className={styles.personal__text}>Personal Remaining Quota: </div>
                <div className={styles.personal__value}>300 GMX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolsModalSubscribe;

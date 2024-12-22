import React from "react";
import styles from "./PoolsModalSubscribe.module.scss";
import { PUBLIC_ICON, PUBLIC_IMAGE } from "../../../constants";
import MyButton from "../../UI/MyButton/MyButton";

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
              <div className={styles.personal__text}>
                Personal Remaining Quota:{" "}
              </div>
              <div className={styles.personal__value}>300 GMX</div>
            </div>
          </div>
          <div className={styles.summary_wrapper}>
            <div className={styles.summary__title}>Summary</div>
            <div className={styles.summary__body}>
              <div className={styles.summary__leftText}>
                <div className={styles.summary__img}>
                  <img src={PUBLIC_IMAGE + "sliderWindow.svg"} alt="" />
                </div>
                <div className={styles.summary__textWrapper}>
                  <div className={styles.summary__discrib}>
                    ETH Discribution Date{" "}
                    <div className={styles.summary__discribRules}>
                      View Rules
                    </div>
                  </div>
                  <div className={styles.summary__sub}>
                    Next Subscription Date
                  </div>
                </div>
              </div>
              <div className={styles.summary__rightText}>
                <div className={styles.disc__data}>2025-01-30 03:00</div>
                <div className={styles.sub__data}>2025-01-30 03:00</div>
              </div>
            </div>
          </div>
          <div className={styles.remarks__wrapper}>
            <div className={styles.remarks__simple}>
              *The Simple Earn Apr is subject to change on a daily basic. APR
              does not mean the actual or predicted returns in fiat currency.
            </div>
            <div className={styles.remarks__early}>
              *Early redemption will return your assets to your Spot Wallet
              within 48-72 hours.
            </div>
          </div>
          <div className={styles.checkbox__agreeAndRead}>
            <input
              name="rememberData"
              type="checkbox"
              className={styles.durations__checkbox}
              id="checkboxDuration"
            />
            <div className={styles.durations__checkboxTextWrapper}>
              <div className={styles.durations__checkboxText}>
                I have read and agreed to{" "}
                <span className={styles.durations__checkboxTextRules}>
                  Binance Simple Earn Service Terms & <br />{" "}
                </span>
              </div>
              <span className={styles.durations__checkboxTextConditions}>
                Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.window__buttonWrapper}>
        <MyButton className={styles.window__button}>Confirm</MyButton>
      </div>
    </div>
  );
};

export default PoolsModalSubscribe;

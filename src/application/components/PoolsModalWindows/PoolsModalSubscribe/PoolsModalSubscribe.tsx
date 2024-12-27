import React, { ChangeEvent } from "react";
import styles from "./PoolsModalSubscribe.module.scss";
import { PUBLIC_ICON, PUBLIC_IMAGE } from "../../../constants";
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import poolsStore from "../../../stores/poolsStore";
import { observer } from "mobx-react-lite";

const PoolsModalSubscribe = () => {
  const { formData, formDataPools } = poolsStore;

  const selectedCoin = formDataPools.coin;
  const selectedPeriod = formDataPools.period;

  const coinData = formData[selectedCoin]?.detail;

  if (!coinData) {
    return <div>Выберите валюту</div>; // Сообщение, если данных нет
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    poolsStore.updateField(name, value);
  };

  const handleConfirm = () => {
    const validationResult = poolsStore.validateFields();

    if (validationResult) {
      poolsStore.setDataValid(true);
      poolsStore.setIsConfirm(1);
      console.log(poolsStore.formDataPools);
    } else {
      console.log("Ошибки валидации:", poolsStore.invalidInputs);
      poolsStore.setDataValid(false);
    }
  };

  return (
    <div className={styles.window__wrapper}>
      <div className={styles.window__header}>
        <div className={styles.window__bottomLine}></div>{" "}
        <div className={styles.window__subscribe}>Subscribe</div>
        <div className={styles.window__line}>
          <div className={styles.window__lineInside}></div>
        </div>
        <div className={styles.window__productRules}>Product Rules</div>
      </div>
      <div className={styles.window__body}>
        <div className={styles.duration__wrapper}>
          {coinData.periods && coinData.periods.length > 0 ? (
            coinData.periods.map((period, index) => (
              <div
                key={index}
                className={`${styles.wrapper__durationElem} ${
                  selectedPeriod === period.period ? styles.selectedPeriod : ""
                }`}
                onClick={() => poolsStore.updateField("period", period.period)}
              >
                <div className={styles.wrapper__durationTitle}>
                  {period.period === "0" ? "Flexible" : period.period}
                </div>
                <div className={styles.wrapper__durationProcent}>
                  {parseFloat(period.apy).toFixed(4)}%
                </div>
                <div className={styles.wrapper__durationImg}>
                  <img
                    src={`${PUBLIC_ICON}${selectedCoin.toLowerCase()}.svg`}
                    alt={selectedCoin}
                  />
                </div>
              </div>
            ))
          ) : (
            <div>""</div>
          )}
        </div>
        <div className={styles.amount__wrapper}>
          <div className={styles.amount__head}>
            {" "}
            <div className={styles.amount__text}>Amount</div>
            <div className={styles.amount__checkbox}>
              {" "}
              <input
                name="autoSubscribe"
                type="checkbox"
                className={styles.amount__checkbox1}
                id="checkbox1"
                onChange={handleChange}
              />
              <div className={styles.durations__checkboxText}>
                Auto-Subscribe
              </div>
            </div>
          </div>
          <div className={styles.amount__inputWrapper}>
            <MyInput
              className={styles.amount__input}
              placeHolder="Min 0.01 GMX"
              name="amount"
              onChange={handleChange}
              isInvalid={poolsStore.invalidInputs.amount}
            />
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
              name="agreeConditions"
              type="checkbox"
              className={styles.durations__checkbox}
              id="checkboxDuration"
              onChange={handleChange}
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
            <div className={styles.durations__checkboxTextWrapperMob}>
              I have read and agreed to
              <span>Binance Simple Earn Service Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.window__buttonWrapper}>
        <MyButton onClick={handleConfirm} className={styles.window__button}>
          Confirm
        </MyButton>
      </div>
    </div>
  );
};

export default observer(PoolsModalSubscribe);

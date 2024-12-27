import React, { ChangeEvent, useState } from "react";
import styles from "./Durations.module.scss";
import { PUBLIC_ICON, PUBLIC_IMAGE } from "../../constants";
import poolsStore from "../../stores/poolsStore";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";

const Durations = () => {
  const handleSelectPeriod = (coin: string, period: string) => {
    runInAction(() => {
      poolsStore.updateField("coin", coin);
      poolsStore.updateField("period", period);
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    poolsStore.updateField(name, value);
  };

  const handleSubscribe = () => {
    console.log(poolsStore.formDataPools);
    poolsStore.setIsSubscribe(true);
  };

  return (
    <div className={styles.durations__wrapper}>
      <div className={styles.durations__wrapperHeader}>
        <div className={styles.durations__title}>
          Principal-protected Products
        </div>
        <div className={styles.durations__text}>
          Earn Rewards on principal-protectsd products/
        </div>
        <div className={styles.durations__search}>
          <div className={styles.durations__searchInputWrapper}>
            <input
              className={styles.durations__searchInput}
              placeholder="Search coins"
            />
            <div className={styles.durations__searchInputImg}>
              <img src={PUBLIC_IMAGE + "durationSearch.svg"} alt="" />
            </div>
          </div>
          <div className={styles.durations__searchSelect}>
            <select>
              <option>All Durations</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className={styles.durations__searchCheckbox}>
            <input
              name="rememberData"
              type="checkbox"
              className={styles.durations__checkbox}
              id="checkboxDuration"
              onChange={handleChange}
            />
            <div className={styles.durations__checkboxText}>
              Do not remember data
            </div>
          </div>
        </div>
      </div>
      <div className={styles.durations__body}>
        <div className={styles.durations__bodyHeaderLine}>
          <div className={styles.durations__bodyHeaderCoin}>Coin</div>
          <div className={styles.durations__bodyHeaderArp}>APR</div>
          <div className={styles.durations__bodyHeaderDuration}>
            Duration (Days)
          </div>
          <div className={styles.durations__bodyHeaderZero}></div>
        </div>
        {Object.entries(poolsStore.formData).map(([coin, { detail }]) => {
          const isActiveCoin = poolsStore.formDataPools.coin === coin;
          const selectedPeriod = isActiveCoin
            ? poolsStore.formDataPools.period
            : null;
          return (
            <div key={coin} className={styles.durations__bodyLine}>
              <div className={styles.durations__bodyLineCoinWrapper}>
                <div className={styles.durations__bodyLineCoinImg}>
                  <img
                    src={`${PUBLIC_ICON}${coin.toLowerCase()}.svg`}
                    alt={coin}
                  />
                </div>
                <div className={styles.durations__bodyLineCoin}>{coin}</div>
              </div>

              <div className={styles.durations__bodyLineProcentWrapper}>
                <div className={styles.durations__bodyLineProcent}>
                  {detail.apyRange.length === 2
                    ? `${parseFloat(detail.apyRange[0]).toFixed(
                        4
                      )}%-${parseFloat(detail.apyRange[1]).toFixed(4)}%`
                    : `${parseFloat(detail.highestApy).toFixed(4)}%`}
                </div>
                <div className={styles.durations__bodyLineEarn}>
                  Earn {coin}
                </div>
              </div>

              <div className={styles.durations__bodyLineDurationWrapper}>
                {detail.periods.map((period, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectPeriod(coin, period.period)}
                    className={`${
                      selectedPeriod === period.period
                        ? styles.durations__bodyLineDurationActive
                        : styles.durations__bodyLineDuration
                    }`}
                  >
                    {period.period === "0" ? "Flexible" : period.period}
                  </div>
                ))}
              </div>

              <button
                className={`${styles.durations__bodyLineButton} ${
                  isActiveCoin && selectedPeriod
                    ? styles.durations__bodyLineDurationActive
                    : ""
                }`}
                disabled={!isActiveCoin || !selectedPeriod}
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(Durations);

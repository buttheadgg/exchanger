import React from "react";
import styles from "./Durations.module.scss";
import { PUBLIC_ICON, PUBLIC_IMAGE } from "../../constants";

const Durations = () => {
  return (
    <div className={styles.durations__wrapper}>
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
          />
          <div className={styles.durations__checkboxText}>
            Do not remember data
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
        <div className={styles.durations__bodyLine}>
          <div className={styles.durations__bodyLineCoinWrapper}>
            <div className={styles.durations__bodyLineCoinImg}>
              <img src={PUBLIC_ICON + "bnb.svg"} alt="" />
            </div>
            <div className={styles.durations__bodyLineCoin}>BNB</div>
          </div>
          <div className={styles.durations__bodyLineProcentWrapper}>
            <div className={styles.durations__bodyLineProcent}>1%</div>
            <div className={styles.durations__bodyLineEarn}>Earn ETH</div>
          </div>
          <div className={styles.durations__bodyLineDurationWrapper}>
            <div className={`${styles.durations__bodyLineDuration} `}>
              Flexible
            </div>
            <div className={`${styles.durations__bodyLineDuration} `}>30</div>
            <div className={`${styles.durations__bodyLineDuration} `}>60</div>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              120
            </div>
          </div>
          <button className={styles.durations__bodyLineButton}>
            Subscribe
          </button>
        </div>
        <div className={styles.durations__bodyLine}>
          <div className={styles.durations__bodyLineCoinWrapper}>
            <div className={styles.durations__bodyLineCoinImg}>
              <img src={PUBLIC_ICON + "bnb.svg"} alt="" />
            </div>
            <div className={styles.durations__bodyLineCoin}>BNB</div>
          </div>
          <div className={styles.durations__bodyLineProcentWrapper}>
            <div className={styles.durations__bodyLineProcent}>1%</div>
            <div className={styles.durations__bodyLineEarn}>Earn ETH</div>
          </div>
          <div className={styles.durations__bodyLineDurationWrapper}>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              Flexible
            </div>
            <div className={`${styles.durations__bodyLineDuration} `}>30</div>
            <div className={`${styles.durations__bodyLineDuration} `}>60</div>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              120
            </div>
          </div>
          <button className={styles.durations__bodyLineButton}>
            Subscribe
          </button>
        </div>
        <div className={styles.durations__bodyLine}>
          <div className={styles.durations__bodyLineCoinWrapper}>
            <div className={styles.durations__bodyLineCoinImg}>
              <img src={PUBLIC_ICON + "bnb.svg"} alt="" />
            </div>
            <div className={styles.durations__bodyLineCoin}>BNB</div>
          </div>
          <div className={styles.durations__bodyLineProcentWrapper}>
            <div className={styles.durations__bodyLineProcent}>1%</div>
            <div className={styles.durations__bodyLineEarn}>Earn ETH</div>
          </div>
          <div className={styles.durations__bodyLineDurationWrapper}>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              Flexible
            </div>
          </div>
          <button className={styles.durations__bodyLineButton}>
            Subscribe
          </button>
        </div>
        <div className={styles.durations__bodyLine}>
          <div className={styles.durations__bodyLineCoinWrapper}>
            <div className={styles.durations__bodyLineCoinImg}>
              <img src={PUBLIC_ICON + "bnb.svg"} alt="" />
            </div>
            <div className={styles.durations__bodyLineCoin}>BNB</div>
          </div>
          <div className={styles.durations__bodyLineProcentWrapper}>
            <div className={styles.durations__bodyLineProcent}>1%</div>
            <div className={styles.durations__bodyLineEarn}>Earn ETH</div>
          </div>
          <div className={styles.durations__bodyLineDurationWrapper}>
            <div className={`${styles.durations__bodyLineDuration} `}>
              Flexible
            </div>
            <div className={`${styles.durations__bodyLineDuration} `}>30</div>
            <div className={`${styles.durations__bodyLineDuration} `}>60</div>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              120
            </div>
          </div>
          <button className={styles.durations__bodyLineButton}>
            Subscribe
          </button>
        </div>
        <div className={styles.durations__bodyLine}>
          <div className={styles.durations__bodyLineCoinWrapper}>
            <div className={styles.durations__bodyLineCoinImg}>
              <img src={PUBLIC_ICON + "bnb.svg"} alt="" />
            </div>
            <div className={styles.durations__bodyLineCoin}>BNB</div>
          </div>
          <div className={styles.durations__bodyLineProcentWrapper}>
            <div className={styles.durations__bodyLineProcent}>1%</div>
            <div className={styles.durations__bodyLineEarn}>Earn ETH</div>
          </div>
          <div className={styles.durations__bodyLineDurationWrapper}>
            <div className={`${styles.durations__bodyLineDuration} `}>
              Flexible
            </div>
            <div className={`${styles.durations__bodyLineDuration} `}>30</div>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              60
            </div>
            <div className={`${styles.durations__bodyLineDuration} `}>120</div>
          </div>
          <button className={styles.durations__bodyLineButton}>
            Subscribe
          </button>
        </div>
        <div className={styles.durations__bodyLine}>
          <div className={styles.durations__bodyLineCoinWrapper}>
            <div className={styles.durations__bodyLineCoinImg}>
              <img src={PUBLIC_ICON + "bnb.svg"} alt="" />
            </div>
            <div className={styles.durations__bodyLineCoin}>BNB</div>
          </div>
          <div className={styles.durations__bodyLineProcentWrapper}>
            <div className={styles.durations__bodyLineProcent}>1%</div>
            <div className={styles.durations__bodyLineEarn}>Earn ETH</div>
          </div>
          <div className={styles.durations__bodyLineDurationWrapper}>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              Flexible
            </div>
          </div>
          <button className={styles.durations__bodyLineButton}>
            Subscribe
          </button>
        </div>
        <div className={styles.durations__bodyLine}>
          <div className={styles.durations__bodyLineCoinWrapper}>
            <div className={styles.durations__bodyLineCoinImg}>
              <img src={PUBLIC_ICON + "bnb.svg"} alt="" />
            </div>
            <div className={styles.durations__bodyLineCoin}>BNB</div>
          </div>
          <div className={styles.durations__bodyLineProcentWrapper}>
            <div className={styles.durations__bodyLineProcent}>1%</div>
            <div className={styles.durations__bodyLineEarn}>Earn ETH</div>
          </div>
          <div className={styles.durations__bodyLineDurationWrapper}>
            <div className={`${styles.durations__bodyLineDuration} `}>
              Flexible
            </div>
            <div
              className={`${styles.durations__bodyLineDuration} ${styles.durations__bodyLineDurationActive}`}
            >
              30
            </div>
            <div className={`${styles.durations__bodyLineDuration} `}>60</div>
            <div className={`${styles.durations__bodyLineDuration} `}>120</div>
          </div>
          <button className={styles.durations__bodyLineButton}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Durations;

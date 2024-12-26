import React, { ChangeEvent } from "react";
import styles from "./PoolsModalHoldings.module.scss";
import { PUBLIC_ICON, PUBLIC_IMAGE } from "../../../constants";
import poolsStore from "../../../stores/poolsStore";
import { observer } from "mobx-react-lite";

const PoolsModalHoldings = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    poolsStore.updateField(name, value);
  };

  const handleButtonBack = () => {
    poolsStore.setIsConfirm(1);
  };

  const handleButtonSubscribe = () => {
    poolsStore.setIsConfirm(3);
  };

  return (
    <div className={styles.holdings__wrapper}>
      <div className={styles.holdings__wrapperHead}>
        <div className={styles.holdings__coin}>
          <div className={styles.holdings__coinImg}>
            <img src={PUBLIC_ICON + "tether.svg"} alt="" />
          </div>
          <div className={styles.holdings__CoinNameWrapper}>
            <div className={styles.holdings__CoinNameTitle}>ETH</div>
            <div className={styles.holdings__CoinNameText}>
              Simple Earn Locked
            </div>
          </div>
        </div>
        <div className={styles.holdings__valueWrapper}>
          <div className={styles.holdings__valueHeader}>0.10000000</div>
          <div className={styles.holdings__valueEquils}>≈ $ 0.10000000</div>
        </div>
        <div className={styles.holdings__buttonWrapper}>
          <button
            onClick={handleButtonBack}
            className={styles.holdings__buttonSub}
          >
            Subscribe
          </button>
          <button
            onClick={handleButtonSubscribe}
            className={styles.holdings__buttonCancel}
          >
            Cancel
          </button>
        </div>
        <div className={styles.holdings__textForCancel}>
          *Eligible for cancellation. Refer to the Product Rules For more
          details.
        </div>
        <div className={styles.holdings__checkboxWraper}>
          <div className={styles.amount__checkbox}>
            {" "}
            <input
              name="autoSubscribe"
              type="checkbox"
              className={styles.amount__checkbox1}
              id="checkbox1"
              onChange={handleChange}
            />
            <div className={styles.durations__checkboxText}>Auto-Subscribe</div>
          </div>
        </div>
      </div>
      <div className={styles.holdings__rerwardWrapper}>
        <div className={styles.holdings__rerwardText}>
          <div className={styles.holdings__rerwardTextHead}>
            Rerward Amount{" "}
          </div>
          <div>Est. APR</div>
          <div>Locked Period (Days)</div>
          <div>Accrue Days</div>
          <div>
            Estimated Next <br></br>
            Distribution Amount
          </div>
        </div>
        <div className={styles.holdings__rerwardValue}>
          <div>--</div>
          <div className={styles.holdings__rerwardValueGroup}>
            <div className={styles.holdings__rerwardValueGroupImg}>
              <img src={PUBLIC_ICON + "tether.svg"} alt="" />
            </div>
            <div>3.1%</div>
          </div>
          <div>21 days</div>
          <div>0 days</div>
          <div className={styles.holdings__rerwardValueUSD}>
            0.00000849 USDT
          </div>
        </div>
      </div>
      <div className={styles.holdings__subscroptionWrapper}>
        <div className={styles.holdings__subscroptionTextWrapper}>
          <div className={styles.holdings__subscroptionImg}>
            {" "}
            <img src={PUBLIC_IMAGE + "progressLine.svg"} alt="" />{" "}
          </div>
          <div className={styles.holdings__subscroptionText}>
            <div className={styles.holdings__subscroptionText1}>
              Subscroption Date
            </div>
            <div className={styles.holdings__subscroptionText2}>
              Next Interest Distription Date
            </div>
            <div className={styles.holdings__subscroptionText3}>
              Interest End Date
            </div>
            <div className={styles.holdings__subscroptionText4}>Redeem to</div>
            <div className={styles.holdings__subscroptionText5}>
              Simple Earn Flexible Products{" "}
              <img src={PUBLIC_IMAGE + "Header-arrowImageDown.svg"} alt="" />{" "}
            </div>
          </div>
        </div>
        <div className={styles.holdings__subscroptionValueWrapper}>
          <div className={styles.holdings__subscroptionValueTop}>
            2025-01-30 03:00
          </div>
          <div>2025-01-30 03:00</div>
          <div>2025-01-30 03:00</div>
          <div>2025-01-30 03:00</div>
        </div>
      </div>
    </div>
  );
};

export default observer(PoolsModalHoldings);

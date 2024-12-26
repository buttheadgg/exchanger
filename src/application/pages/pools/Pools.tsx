import React from "react";
import styles from "./Pools.module.scss";
import LearnMore from "../../components/LearnMore/LearnMore";
import FrequentlyQuestions from "../../components/FrequentlyQuestions/FrequentlyQuestions";
import Durations from "../../components/Durations/Durations";
import PoolsModalSubscribe from "../../components/PoolsModalWindows/PoolsModalSubscribe/PoolsModalSubscribe";
import PoolsModalSuccessful from "../../components/PoolsModalWindows/PoolsModalSuccessful/PoolsModalSuccessful";
import PoolsModalHoldings from "../../components/PoolsModalWindows/PoolsModalHoldings/PoolsModalHoldings";

const Pools = () => {
  return (
    <div className={styles.main__pools}>
      <div className={styles.main__wrapper}>
        <Durations />
        <LearnMore />
        <FrequentlyQuestions/>
      </div>
    </div>
  );
};

export default Pools;
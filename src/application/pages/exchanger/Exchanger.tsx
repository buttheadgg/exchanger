import React, { FC, useState } from "react";
import styles from "./Exchanger.module.scss";
import { PUBLIC_IMAGE } from "../../constants";
import FormExchanger from "../../components/FormExchanger/FormExchanger";
import { observer } from "mobx-react-lite";
import FormModalWindow from "../../components/FormModalWindow/FormModalWindow";
import formStore from "../../stores/formStore";
import RecentExchanges from "../../components/RecentExchanges/RecentExchanges";
import Advantages from "../../components/Advantages/Advantages";
import Reliability from "../../components/Reliability/Reliability";

const Exchanger: React.FC = observer(() => {
  const formImage = PUBLIC_IMAGE + "Exchanger-form-img.svg";
  return (
    <main className={styles.main}>
      <div className={styles.main__wrapper}>
        <div className={styles.from__wrapper}>
          <div className={styles.form__imageWrapper}>
            <img src={formImage} alt="formImage" />
          </div>
          <FormExchanger />
          <FormModalWindow />
        </div>
        <RecentExchanges />
        <Advantages />
        <Reliability />
      </div>
    </main>
  );
});

export default Exchanger;

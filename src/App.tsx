import React from "react";
import styles from "./App.module.scss";
import "./application/styles/global.scss";
import Header from "./application/components/Header/Header";
import Footer from "./application/components/Footer/Footer";
import RunningLine from "./application/components/RunningLine/RunningLine";
import { observer } from "mobx-react-lite";
import FormModalWindow from "./application/components/FormModalWindow/FormModalWindow";
import ModalWindow from "./application/components/ModalWindow/ModalWindow";
import formStore from "./application/stores/formStore";
import FormModalWindowDone from "./application/components/FormModalWindow/FormModalWindowDone/FormModalWindowDone";
import FormModalWindowСanceled from "./application/components/FormModalWindow/FormModalWindowСanceled/FormModalWindowСanceled";
import Pools from "./application/pages/Pools/Pools";
import Exchanger from "./application/pages/Exchanger/Exchanger";

const App = () => {
  let modalContent;

  switch (formStore.isPaid) {
    case true:
      modalContent = <FormModalWindowDone />;
      break;
    case false:
      modalContent = <FormModalWindowСanceled />;
      break;
    default:
      modalContent = <FormModalWindow />;
      break;
  }

  return (
    <body>
      <Header />
      <RunningLine />
      <div className={styles.page__wrapper}>
        <ModalWindow>{modalContent}</ModalWindow>
        <Exchanger />
        <Footer />
      </div>
    </body>
  );
};

export default observer(App);

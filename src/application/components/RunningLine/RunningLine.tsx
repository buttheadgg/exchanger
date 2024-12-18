import React from "react";
import Marquee from "react-fast-marquee";
import styles from "../RunningLine/RunningLine.module.scss";
import RateCoin from "../RateCoin/RateCoin";
import { PUBLIC_ICON } from "../../constants";

const RunningLIne = () => {
  const coinData = {
    bitcoin: "105254.586",
    ethereum: "3887.1804",
    tether: "0.99974155",
    bnb: "719.33575",
    solana: "218.28557",
    xrp: "2.5743759",
    spx: "6050.61",
    nasdaq: "22075.0",
    dji: "43449.9",
    gold: "2661.2",
    silver: "30.855",
  };

  return (
    <div className={styles.marquee__wrapper}>
      <Marquee speed={50} autoFill={true}>
        {Object.entries(coinData).map(([key, value]) => {
          if (key === "spx") {
            return (
              <RateCoin
                key={key}
                image={PUBLIC_ICON + "S&P.svg"}
                coinName={key}
                coinSecondName={key}
                coinPrice={value}
              />
            );
          }
          if (key === "dji") {
            return (
              <RateCoin
                key={key}
                image={PUBLIC_ICON + "Dow.svg"}
                coinName={key}
                coinSecondName={key}
                coinPrice={value}
              />
            );
          }
          return (
            <RateCoin
              key={key}
              image={PUBLIC_ICON + key + ".svg"}
              coinName={key}
              coinSecondName={key}
              coinPrice={value}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default RunningLIne;

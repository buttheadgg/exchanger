import React from 'react';
import Marquee from "react-fast-marquee";
import styles from '../running_line/RunningLine.module.scss'
import RateCoin from '../rate_coin/RateCoin';
import Bnb from '../../image/BNB-coin.svg';
import Solana from '../../image/solana-coin.svg';
import Xrp from '../../image/XRP-coin.svg';
import Ethereum from '../../image/Ethereum-coin.svg';
import Nasdaq from '../../image/Nasdaq-coin.svg';
import Blue from '../../image/Blue-coin.svg';
import Orange from '../../image/Orange-coin.svg';

const RunningLIne = () => {
    return (
        <div className={styles.marquee__wrapper}>
            <Marquee  speed={50} autoFill={true}>
                <RateCoin image={Bnb} coinName={'BNB'} coinSecondName={'BNB'} coinPrice={'1,02356'} />
                <RateCoin image={Solana} coinName={'Solana'} coinSecondName={'SOL'} coinPrice={'1,02356'} />
                <RateCoin image={Xrp} coinName={'XRP'} coinSecondName={'XRP'} coinPrice={'1,02356'} />
                <RateCoin image={Ethereum} coinName={'S&P 500'} coinSecondName={'S&P 500'} coinPrice={'1,02356'} />
                <RateCoin image={Nasdaq} coinName={'Nasdaq 100'} coinSecondName={'Nasdaq 100'} coinPrice={'1,02356'} />
                <RateCoin image={Blue} coinName={'Dow 30'} coinSecondName={'Dow 30'} coinPrice={'1,02356'} />
                <RateCoin image={Orange} coinName={'Gold'} coinSecondName={'Gold'} coinPrice={'1,02356'} />
            </Marquee>
        </div>

    );
};

export default RunningLIne;
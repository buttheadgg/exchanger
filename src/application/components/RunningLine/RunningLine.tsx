import React from 'react';
import Marquee from "react-fast-marquee";
import styles from '../RunningLine/RunningLine.module.scss'
import RateCoin from '../RateCoin/RateCoin';
import { PUBLIC_IMAGE } from '../../constants';

const RunningLIne = () => {

    const coinImages = [
        { name: 'BNB', path: PUBLIC_IMAGE+'BNB-coin.svg' },
        { name: 'Solana', path: PUBLIC_IMAGE+'solana-coin.svg' },
        { name: 'Xrp', path: PUBLIC_IMAGE+'XRP-coin.svg' },
        { name: 'Ethereum', path: PUBLIC_IMAGE+'Ethereum-coin.svg' },
        { name: 'Nasdaq', path: PUBLIC_IMAGE+'Nasdaq-coin.svg' },
        { name: 'Blue', path: PUBLIC_IMAGE+'Blue-coin.svg' },
        { name: 'Orange', path: PUBLIC_IMAGE+'Orange-coin.svg' },
      ];

    return (
        <div className={styles.marquee__wrapper}>
      <Marquee speed={50} autoFill={true}>
        {coinImages.map(({ name, path }) => (
          <RateCoin image={path} coinName={name} coinSecondName={name} coinPrice={'1,02356'} key={name}/>
        ))}
      </Marquee>
        </div>

    );
};

export default RunningLIne;
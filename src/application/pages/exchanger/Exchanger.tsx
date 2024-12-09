import React from 'react';
import styles from './Exchanger.module.scss'
import { PUBLIC_IMAGE } from '../../constants';
import FormExchanger from '../../components/FormExchanger/FormExchanger';
import { observer } from 'mobx-react-lite';


const Exchanger = () => {
      const formImage = PUBLIC_IMAGE+'Exchanger-form-img.svg';

    return (
        <main className={styles.main}>
            <div className={styles.main__wrapper}>
                <div className={styles.from__wrapper}>
                    <div className={styles.form__imageWrapper}>
                        <img src={formImage} alt="formImage" />
                    </div>
                    <FormExchanger/>
                </div>
            </div>
        </main>
    );
};

export default Exchanger;
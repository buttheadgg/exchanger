import React from 'react';
import styles from './Exchanger.module.scss'
import FormExchanger from '../../components/FormExchanger/MultiStepForm/MultiStepForm';
import { PUBLIC_IMAGE } from '../../constants';


const Exchanger = () => {
      const formImage = PUBLIC_IMAGE+'Exchanger-form-img.svg';

    return (
        <main className={styles.main}>
            <div className={styles.main__wrapper}>
                <div className={styles.from__wrapper}>
                    <div className={styles.form__imageWrapper}></div>
                    <img src={formImage} alt="formImage" />
                    <FormExchanger/>
                </div>
            </div>
        </main>
    );
};

export default Exchanger;
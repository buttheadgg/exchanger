import React, { useState } from 'react';
import styles from './FormExchanger.module.scss'
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import FormBodyCash from './FornBody/FormBodyCash';

const FormExchanger = () => {

    const [formData, setFormData] = useState({});
  
    const handleNext = () => {
      // Валидация данных 
    };

    const handleSubmit = () => {
        //Отправка данных 
    }



    return (
        <div className={styles.form__exchanger}>
                <div className={styles.form__wrapper}>
                    <div className={styles.form__header}>
                        <div className={styles.form__headerPay}>Pay</div>
                        <div className={styles.form__headerReceive}>Receive</div>
                    </div>
                    <div className={styles.form__headerLine}></div>
                    <FormBodyCash></FormBodyCash>
                </div>
            <MyButton onClick={handleNext}>EXCHANGE</MyButton>
        </div>
    );
};

export default FormExchanger;
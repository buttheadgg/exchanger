import React, { FC } from 'react';
import { useStepContext } from '../StepContext/StepContext';
import styles from './Step1.module.scss'

interface Step1Props {
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}


const Step1:FC<Step1Props> = ({setFormData}) => {
    const { formData } = useStepContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: e.target.value,
        }));
      };
  
    return (
      <div className={styles.step1}>
        <div className={styles.step1__wrapper}>
          <div className={styles.step__header}>
            <div className={styles.step__headerPay}>Pay</div>
            <div className={styles.step__headerReceive}>Receive</div>
          </div>
        </div>
        <input type="text" name="firstName" onChange={handleChange} placeholder="Имя" />
        <input type="text" name="lastName" onChange={handleChange} placeholder="Фамилия" />
      </div>
    );
};

export default Step1;
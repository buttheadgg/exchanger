import React, { FC } from 'react';
import styles from './MyInput.module.scss';

interface InputProps{
    value?: string | number | readonly string[];
    onChange?:  (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    placeHolder?: string;
}


const MyInput:FC<InputProps> = ({value, onChange, className, type, placeHolder}) => {
    return (
        <div className={styles.myInput__wrapper}>
            <div>
            <input value={value} onChange={onChange} className={`${styles.myInput} ${className || ''}`} type={type} placeholder={placeHolder}/>
            </div>
        </div>
        
    );
};

export default MyInput;
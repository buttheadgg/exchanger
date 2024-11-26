import React, { useState } from 'react';
import Step1 from '../Steps/Step1';
import Step2 from '../Steps/Step2';
import styles from './MultiStepForm.module.scss'

const FormExchanger = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
  
    const handleNext = () => {
      // Валидация данных 
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrevious = () => {
      setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        //Отправка данных 
    }

    return (
        <div className={styles.multistepform}>
            {currentStep === 1 && <Step1 setFormData={setFormData} />}
            <button onClick={handlePrevious} disabled={currentStep === 1}>Назад</button>
            <button onClick={handleNext} disabled={currentStep === 3}>Далее</button>
            {currentStep === 3 && <button onClick={handleSubmit}>Отправить</button>} 
        </div>
    );
};

export default FormExchanger;
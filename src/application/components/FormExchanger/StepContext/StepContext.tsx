import React, { createContext, useContext, useState } from 'react';

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
  }

interface StepContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    formData: FormData; // Здесь нужно указать точный тип formData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>; // Здесь нужно указать точный тип formData
  }

  const StepContext = createContext<StepContextType | undefined>(undefined);

  export const StepProvider = ({ children, initialFormData = {} }: { children: React.ReactNode; initialFormData?: FormData }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
  
    return (
      <StepContext.Provider value={{ currentStep, setCurrentStep, formData, setFormData}}>
        {children}
      </StepContext.Provider>
    );
  };
  
  
  export const useStepContext = () => {
    const context = useContext(StepContext);
    if (!context) {
      throw new Error('useStepContext must be used within a StepProvider');
    }
    return context;
  };
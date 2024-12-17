import { makeAutoObservable } from "mobx";

class FormStore {
   formData: { [key: string]: any } = {};
   invalidInputs: { [key: string]: boolean } = {};
   activeComponent: string = "cryptoBank";
   dataValid: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  updateField(name: string, value: string | boolean) {
    this.formData[name] = value;
  }
  
  setActiveComponent(component: string) {
    this.activeComponent = component;
  }

  setDataValid(component: boolean) {
    this.dataValid = component;
  }
  
  validateFields() {
    const newInvalidInputs: { [key: string]: boolean } = {};

    if (!this.formData.email || !this.validateEmail(this.formData.email as string)) {
      newInvalidInputs.email = true;
    }

    if (!this.formData.agreeToRules) {
      newInvalidInputs.agreeToRules = true;
    }

    if (
      !this.formData.paySelect ||
      isNaN(Number(this.formData.paySelect)) ||
      Number(this.formData.paySelect) < 100 ||
      Number(this.formData.paySelect) > 100000
    ) {
      newInvalidInputs.paySelect = true;
    }

    if (
      !this.formData.receiveSelect  ||
      isNaN(Number(this.formData.receiveSelect )) ||
      Number(this.formData.receiveSelect ) < 100 ||
      Number(this.formData.receiveSelect ) > 100000
    ) {
      newInvalidInputs.receiveSelect  = true;
    }

    
    if (this.activeComponent === "cashCrypto") {
      if (!this.formData.walletAddress) {
        newInvalidInputs.walletAddress = true;
      }
      if (!this.formData.country) {
        newInvalidInputs.country = true;
      } 
      if (!this.formData.city) {
        newInvalidInputs.city = true;
      } 
    }

    if(this.activeComponent === "bankCrypto"){
      if(!this.formData.btcWalletAddress) {
        newInvalidInputs.btcWalletAddress = true;
      }
      if(!this.formData.cardNumber) {
        newInvalidInputs.cardNumber = true;
      }
    }

    if(this.activeComponent === 'cryptoBank'){
      if (!this.formData.country) {
        newInvalidInputs.country = true;
      } 
      if (!this.formData.city) {
        newInvalidInputs.city = true;
      } 
    }

    if (this.activeComponent === 'cryptoCash'){
      if (!this.formData.country) {
        newInvalidInputs.country = true;
      } 
      if (!this.formData.city) {
        newInvalidInputs.city = true;
      } 
    }
    
    this.invalidInputs = newInvalidInputs;
    return Object.values(newInvalidInputs).every((isValid) => !isValid);
  };

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

}

const formStore = new FormStore();
export default formStore;


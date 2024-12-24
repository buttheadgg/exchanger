import { makeAutoObservable } from "mobx";

class FormStore {
  formData: { [key: string]: any } = {
    pay: "",
    payId: "",
    receive: "",
    receiveId: "",
    paySelect: "",
    receiveSelect: "",
    country: "",
    countryId: "",
    city: "",
    cityId: "",
    name: "",
    surname: "",
    phone: "",
    email: "",
    telegram: "",
    walletAddress: "",
    btcWalletAddress: "",
    rememberData: "",
    agreeToRules: "",
    direction: "",
    changer_id: "",
    isPayd: "no",
    idOperation: "",
  };
  formCourse: { [key: string]: any } = {
    pay: "",
    payValue: "",
    receiveValue: "",
    payId: "",
    receive: "",
    receiveId: "",
    country: "",
    city: "",
    cityId:"",
    direction: "crypto-cash",
  };
  formConvert: { [key: string]: any } = {};

  invalidInputs: { [key: string]: boolean } = {};
  activeComponent: string = "crypto-cash";
  dataValid: boolean = false;
  isPaid: boolean | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  updateField(name: string, value: string | boolean) {
    this.formData[name] = value;
  }
  updateForm(name: string, value: string | boolean) {
    this.formCourse[name] = value;
  }

  updateConvert(name: string, value: string | boolean | Record<string, any>) {
    if (typeof value === "object" && value !== null) {
      this.formConvert = {
        ...this.formConvert,
        ...value,
      };
    } else {
      this.formConvert[name] = value;
    }
  }

  updateInput(name: string, value: string | number) {
    this.formData[name] = value;
    this.formCourse[name] = value;
  }

  setActiveComponent(component: string) {
    this.activeComponent = component;
  }

  setIsPaid(component: boolean | undefined) {
    this.isPaid = component;
  }

  setDataValid(component: boolean) {
    this.dataValid = component;
  }

  validateFields() {
    const newInvalidInputs: { [key: string]: boolean } = {};

    if (
      !this.formData.email ||
      !this.validateEmail(this.formData.email as string)
    ) {
      newInvalidInputs.email = true;
    }

    if (!this.formData.agreeToRules) {
      newInvalidInputs.agreeToRules = true;
    }

    if (
      !this.formData.paySelect ||
      isNaN(Number(this.formData.paySelect)) ||
      Number(this.formData.paySelect) < 100 ||
      Number(this.formData.paySelect) > 1000000000
    ) {
      newInvalidInputs.paySelect = true;
    }

    if (
      !this.formData.receiveSelect ||
      isNaN(Number(this.formData.receiveSelect)) ||
      Number(this.formData.receiveSelect) < 100 ||
      Number(this.formData.receiveSelect) > 100000000
    ) {
      newInvalidInputs.receiveSelect = true;
    }

    if (this.activeComponent === "cash-crypto") {
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

    if (this.activeComponent === "bank-crypto") {
      if (!this.formData.btcWalletAddress) {
        newInvalidInputs.btcWalletAddress = true;
      }
      if (!this.formData.cardNumber) {
        newInvalidInputs.cardNumber = true;
      }
    }

    if (this.activeComponent === "crypto-bank") {
      if (!this.formData.country) {
        newInvalidInputs.country = true;
      }
      if (!this.formData.city) {
        newInvalidInputs.city = true;
      }
    }

    if (this.activeComponent === "crypto-cash") {
      if (!this.formData.country) {
        newInvalidInputs.country = true;
      }
      if (!this.formData.city) {
        newInvalidInputs.city = true;
      }
    }

    this.invalidInputs = newInvalidInputs;
    return Object.values(newInvalidInputs).every((isValid) => !isValid);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

const formStore = new FormStore();
export default formStore;

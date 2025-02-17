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
    direction: "crypto-crypto",
    changer_id: "1071",
    isPayd: "no",
    transactionId: "",
  };
  formCourse: { [key: string]: any } = {
    pay: "",
    payValue: "",
    receiveValue: "0",
    payId: "93",
    receive: "",
    receiveId: "10",
    cityId: "",
    direction: "crypto-crypto",
  };
  formConvert: { [key: string]: any } = {};
  finalData: { [key: string]: any } = {};
  receiveMin: string = "";
  invalidInputs: { [key: string]: boolean } = {};
  activeComponent: string = "crypto-crypto";
  dataValid: boolean | undefined = false;
  isPaid: Number | undefined = undefined;
  newCourse = 0;
  minReserve = 0;
  isLoading: boolean = false;
  isValidate: boolean | null = null;
  captchaToken: string | null = null;
  validatePaySelectMax: boolean = false;
  validatePaySelectMin: boolean = false;
  validateReceiveSelectMax: boolean = false;
  validateReceiveSelectMin: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCaptchaToken(value: string | null) {
    this.captchaToken = value;
  }

  updateField(name: string, value: string | boolean) {
    this.formData[name] = value;
  }
  updateForm(name: string, value: string | boolean) {
    this.formCourse[name] = value;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
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
    if (this.formConvert.rate) {
      this.newCourse = 1 / this.formConvert.rate;
    }
  }

  updateFinalData(name: string, value: string | boolean | Record<string, any>) {
    if (typeof value === "object" && value !== null) {
      this.finalData = {
        ...this.finalData,
        ...value,
      };
    } else {
      this.finalData[name] = value;
    }
  }

  async getCourse() {
    console.log("передаю", this.formCourse);
    this.setIsLoading(true);
    try {
      const res = await fetch("http://alfa-crypto.com/api/v1/exchange/rate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formStore.formCourse),
      });
      const result = await res.json();
      console.log(result);
      this.formConvert = result;
      this.minReserve = result.inmin * result.rate;
      this.newCourse =
        result.rate ? 1 / result.rate : 0;
    } catch (error) {
      console.error("Ошибка при выполнении fetch-запроса rate:");
    } finally {
      this.setIsLoading(false);
    }
  }

  updateInput(name: string, value: string | number) {
    this.formData[name] = value;
    this.formCourse[name] = value;
  }

  setReceiveMin(component: string) {
    this.receiveMin = component;
  }

  setActiveComponent(component: string) {
    this.activeComponent = component;
  }

  setIsPaid(component: Number | undefined) {
    this.isPaid = component;
  }

  setDataValid(component: boolean | undefined) {
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

    if (this.captchaToken == null) {
      newInvalidInputs.captcha = true;
    }

    if (
      parseFloat(this.formData.paySelect) > parseFloat(this.formConvert.inmax)
    ) {
      newInvalidInputs.paySelect = true;
      this.validatePaySelectMax = true;
      this.validatePaySelectMin = false;
    } else if (
      parseFloat(this.formData.paySelect) < 0  ||
      parseFloat(this.formData.paySelect) === 0 || 
      parseFloat(this.formData.paySelect) < parseFloat(this.formConvert.inmin)
    ) {
      newInvalidInputs.paySelect = true;
      this.validatePaySelectMin = true;
      this.validatePaySelectMax = false;
    }else if (
      !this.formData.paySelect ||
      isNaN(parseFloat(this.formData.paySelect))
    ){
      newInvalidInputs.paySelect = true;
      this.validatePaySelectMin = false;
      this.validatePaySelectMax = false;
    }else
    {
      this.validatePaySelectMin = false;
      this.validatePaySelectMax = false;
    }

    if (
      parseFloat(this.formData.receiveSelect) > parseFloat(this.formConvert.max_reserve)
    ) {
      newInvalidInputs.receiveSelect = true;
      this.validateReceiveSelectMax = true;
      this.validateReceiveSelectMin = false;
    }else if (
      parseFloat(this.formData.receiveSelect) < parseFloat(this.receiveMin) ||
      parseFloat(this.formData.paySelect) === 0
    ){
      newInvalidInputs.receiveSelect = true;
      this.validateReceiveSelectMax = false;
      this.validateReceiveSelectMin = true;
    }else{
      this.validateReceiveSelectMax = false;
      this.validateReceiveSelectMin = false;
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

    if (this.activeComponent === "crypto-crypto") {
      if (!this.formData.btcWalletAddress) {
        newInvalidInputs.btcWalletAddress = true;
      }
    }

    this.invalidInputs = newInvalidInputs;
    return Object.values(newInvalidInputs).every((isValid) => !isValid);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  setHandleChange() {
    this.isValidate = this.validateFields();
    if (!this.isValidate) {
      this.dataValid = false;
    }
  }
}

const formStore = new FormStore();
export default formStore;

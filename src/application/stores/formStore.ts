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
    changer_id: "",
    isPayd: "no",
    transactionId: "",
  };
  formCourse: { [key: string]: any } = {
    pay: "",
    payValue: "0",
    receiveValue: "",
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
  dataValid: boolean = false;
  isPaid: Number | undefined = undefined;
  newCourse = 0;
  minReserve = 0;
  isLoading: boolean = false;
  captchaToken: string | null = null;
  isValidate: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
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
    console.log("передаю", formStore.formCourse);
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
        this.formConvert.rate > 0 ? 1 / this.formConvert.rate : 0;
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
      isNaN(parseFloat(this.formData.paySelect)) ||
      parseFloat(this.formData.paySelect) < this.formConvert.inmin ||
      parseFloat(this.formData.paySelect) > this.formConvert.inmax ||
      parseFloat(this.formData.paySelect) === 0
    ) {
      newInvalidInputs.paySelect = true;
    }

    if (
      !this.formData.receiveSelect ||
      isNaN(parseFloat(this.formData.receiveSelect)) ||
      parseFloat(this.formData.receiveSelect) < parseFloat(this.receiveMin) ||
      parseFloat(this.formData.receiveSelect) > this.formConvert.max_reserve ||
      parseFloat(this.formData.paySelect) === 0
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

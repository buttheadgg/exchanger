import { makeAutoObservable } from "mobx";
import { Pools } from "../components/types/types";

class PoolsStore {
  formData:Pools = {
    BTC: {
      detail: {
        apyRange: ["0.00289320"],
        duration: "0",
        highestApy: "0.00289320",
        periods: [
          {
            period: "0",
            apy: "0.00289320",
            minPurchaseAmount: "0.00150000",
            maxPurchaseAmountPerUser: "110000.00000000",
          },
        ],
      },
    },
    ETH: {
      detail: {
        apyRange: ["0.01496593"],
        duration: "0",
        highestApy: "0.01496593",
        periods: [
          {
            period: "0",
            apy: "0.01496593",
            minPurchaseAmount: "0.00200000",
            maxPurchaseAmountPerUser: "50000000.00000000",
          },
        ],
      },
    },
    FIL: {
      detail: {
        apyRange: ["0.01847213", "0.03500000"],
        duration: "90",
        highestApy: "0.03500000",
        periods: [
          {
            period: "0",
            apy: "0.01847213",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "100000000.00000000",
          },
          {
            period: "30",
            apy: "0.03000000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "300000.00000000",
          },
          {
            period: "60",
            apy: "0.03300000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "100000.00000000",
          },
          {
            period: "90",
            apy: "0.03500000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "100000.00000000",
          },
          {
            period: "120",
            apy: "0.03800000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "50000.00000000",
          },
        ],
      },
    },
    MOVE: {
      detail: {
        apyRange: ["0.17849894"],
        duration: "0",
        highestApy: "0.17849894",
        periods: [
          {
            period: "0",
            apy: "0.17849894",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "4453672.00000000",
          },
        ],
      },
    },
    EOS: {
      detail: {
        apyRange: ["0.01875722", "0.14500000"],
        duration: "60",
        highestApy: "0.14500000",
        periods: [
          {
            period: "0",
            apy: "0.01875722",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "2101150.00000000",
          },
          {
            period: "30",
            apy: "0.06900000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "1000000.00000000",
          },
          {
            period: "60",
            apy: "0.14500000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "400000.00000000",
          },
          {
            period: "90",
            apy: "0.20000000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "400000.00000000",
          },
          {
            period: "120",
            apy: "0.29900000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "200000.00000000",
          },
        ],
      },
    },
    ALGO: {
      detail: {
        apyRange: ["0.00539618", "0.01500000"],
        duration: "120",
        highestApy: "0.01500000",
        periods: [
          {
            period: "0",
            apy: "0.00539618",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "7872620.00000000",
          },
          {
            period: "30",
            apy: "0.00700000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "2000000.00000000",
          },
          {
            period: "60",
            apy: "0.00950000",
            minPurchaseAmount: "10.00000000",
            maxPurchaseAmountPerUser: "200000.00000000",
          },
          {
            period: "90",
            apy: "0.01250000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "200000.00000000",
          },
          {
            period: "120",
            apy: "0.01500000",
            minPurchaseAmount: "0.01000000",
            maxPurchaseAmountPerUser: "1000.00000000",
          },
        ],
      },
    },
    DOGE: {
      detail: {
        apyRange: ["0.00124311"],
        duration: "0",
        highestApy: "0.00124311",
        periods: [
          {
            period: "0",
            apy: "0.00124311",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "282254253.00000000",
          },
        ],
      },
    },
    ETC: {
      detail: {
        apyRange: ["0.00070037"],
        duration: "0",
        highestApy: "0.00070037",
        periods: [
          {
            period: "0",
            apy: "0.00070037",
            minPurchaseAmount: "0.01000000",
            maxPurchaseAmountPerUser: "100000000.00000000",
          },
        ],
      },
    },
    USDT: {
      detail: {
        apyRange: ["0.03600000", "0.09634877"],
        duration: "0",
        highestApy: "0.09634877",
        periods: [
          {
            period: "0",
            apy: "0.09634877",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "100000000000.00000000",
          },
          {
            period: "21",
            apy: "0.03600000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "3000000.00000000",
          },
        ],
      },
    },
    TON: {
      detail: {
        apyRange: ["0.00273593", "0.02900000"],
        duration: "90",
        highestApy: "0.02900000",
        periods: [
          {
            period: "0",
            apy: "0.00273593",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "548067.00000000",
          },
          {
            period: "30",
            apy: "0.01200000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "50000.00000000",
          },
          {
            period: "60",
            apy: "0.01900000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "20000.00000000",
          },
          {
            period: "90",
            apy: "0.02900000",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "200.00000000",
          },
        ],
      },
    },
    LTC: {
      detail: {
        apyRange: ["0.00423699"],
        duration: "0",
        highestApy: "0.00423699",
        periods: [
          {
            period: "0",
            apy: "0.00423699",
            minPurchaseAmount: "0.01000000",
            maxPurchaseAmountPerUser: "50000000.00000000",
          },
        ],
      },
    },
    GMX: {
      detail: {
        apyRange: ["0.00484328", "0.05900000"],
        duration: "120",
        highestApy: "0.05900000",
        periods: [
          {
            period: "0",
            apy: "0.00484328",
            minPurchaseAmount: "0.01000000",
            maxPurchaseAmountPerUser: "10000.00000000",
          },
          {
            period: "30",
            apy: "0.01500000",
            minPurchaseAmount: "0.01000000",
            maxPurchaseAmountPerUser: "10000.00000000",
          },
          {
            period: "60",
            apy: "0.03500000",
            minPurchaseAmount: "0.01000000",
            maxPurchaseAmountPerUser: "20000.00000000",
          },
          {
            period: "120",
            apy: "0.05900000",
            minPurchaseAmount: "0.01000000",
            maxPurchaseAmountPerUser: "500.00000000",
          },
        ],
      },
    },
    GALA: {
      detail: {
        apyRange: ["0.00076462"],
        duration: "0",
        highestApy: "0.00076462",
        periods: [
          {
            period: "0",
            apy: "0.00076462",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "80816569.00000000",
          },
        ],
      },
    },
    QNT: {
      detail: {
        apyRange: ["0.00288256"],
        duration: "0",
        highestApy: "0.00288256",
        periods: [
          {
            period: "0",
            apy: "0.00288256",
            minPurchaseAmount: "0.00100000",
            maxPurchaseAmountPerUser: "8622.00000000",
          },
        ],
      },
    },
    XRP: {
      detail: {
        apyRange: ["0.00767454"],
        duration: "0",
        highestApy: "0.00767454",
        periods: [
          {
            period: "0",
            apy: "0.00767454",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "10000000000.00000000",
          },
        ],
      },
    },
    ADA: {
      detail: {
        apyRange: ["0.00286709", "0.02190000"],
        duration: "120",
        highestApy: "0.02190000",
        periods: [
          {
            period: "0",
            apy: "0.00286709",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "10000000000.00000000",
          },
          {
            period: "30",
            apy: "0.01290000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "2000000.00000000",
          },
          {
            period: "60",
            apy: "0.01590000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "1000000.00000000",
          },
          {
            period: "90",
            apy: "0.01890000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "200000.00000000",
          },
          {
            period: "120",
            apy: "0.02190000",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "30000.00000000",
          },
        ],
      },
    },
    USDC: {
      detail: {
        apyRange: ["0.12687816"],
        duration: "0",
        highestApy: "0.12687816",
        periods: [
          {
            period: "0",
            apy: "0.12687816",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "152736086.00000000",
          },
        ],
      },
    },
    WBETH: {
      detail: {
        apyRange: ["0.02588740"],
        duration: "0",
        highestApy: "0.02588740",
        periods: [
          {
            period: "0",
            apy: "0.02588740",
            minPurchaseAmount: "0.00010000",
            maxPurchaseAmountPerUser: "1400000.00000000",
          },
        ],
      },
    },
    RARE: {
      detail: {
        apyRange: ["0.02480385"],
        duration: "0",
        highestApy: "0.02480385",
        periods: [
          {
            period: "0",
            apy: "0.02480385",
            minPurchaseAmount: "1.00000000",
            maxPurchaseAmountPerUser: "1405542.00000000",
          },
        ],
      },
    },
    AVA: {
      detail: {
        apyRange: ["0.10434391"],
        duration: "0",
        highestApy: "0.10434391",
        periods: [
          {
            period: "0",
            apy: "0.10434391",
            minPurchaseAmount: "0.10000000",
            maxPurchaseAmountPerUser: "637609.00000000",
          },
        ],
      },
    },
  };
  formDataPools: { [key: string]: any } = {
    coin: "",
    period: "",
    rememberData: "",
    amount: "",
    agreeConditions: "",
    autoSubscribe: ""
  };
  isSubscribe: boolean | undefined = undefined;
  isConfirm: Number = 0;
  invalidInputs: { [key: string]: boolean } = {};
  dataValid: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  updateField(name: string, value: string | boolean) {
    this.formDataPools[name] = value;
  }

  setDataValid(component: boolean) {
    this.dataValid = component;
  }

  setIsSubscribe(component: boolean) {
    this.isSubscribe = component;
  }

  validateFields() {
    const newInvalidInputs: { [key: string]: boolean } = {};

    if (!this.formDataPools.agreeConditions) {
      newInvalidInputs.agreeConditions = true;
    }

    if (
      !this.formDataPools.amount ||
      isNaN(parseFloat(this.formDataPools.amount)) ||
      parseFloat(this.formDataPools.amount) < 0.01 ||
      parseFloat(this.formDataPools.amount) === 0
    ) {
      newInvalidInputs.amount = true;
    }

    this.invalidInputs = newInvalidInputs;
    return Object.values(newInvalidInputs).every((isValid) => !isValid);
  }

  setIsConfirm(component: Number) {
    this.isConfirm = component;
  }
}

const poolsStore = new PoolsStore();
export default poolsStore;

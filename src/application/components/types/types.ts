export interface Direction {
  id: string;
  name: string;
  icon: string;
  min: string;
  max: string;
  reserve: string;
  type: string;
}

export interface Directions {
  [key: string]: Direction;
}

export interface Currency {
  directions: Directions;
  cur_name: string;
  icon: string;
  id: string;
  min: string;
  max: string;
  type: string;
  rate: string;
}

export interface JsonData {
  [key: string]: Currency;
}

export interface formDataInterface {
  paySelect?: string;
  receiveSelect?: string;
  country?: string;
  city?: string;
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
  telegram?: string;
  walletAddress?: string;
  btcWalletAddress?: string;
  rememberData?: boolean;
  agreeToRules?: boolean;
}

export interface City {
  [city: string]: string;
}

export interface LocationData {
  [country: string]: City;
}

export interface Period {
  period: string;
  apy: string;
  minPurchaseAmount: string;
  maxPurchaseAmountPerUser: string;
}

export interface Detail {
  apyRange: string[];
  duration: string;
  highestApy: string;
  periods: Period[];
}
export interface Pools {
  [key: string]: {
    detail: Detail;
  };
}

export interface FormExchangerInterface {
    paySelect: string;
    receiveSelect: string;
  }

export interface ComponentData {
  country?: string;
  city?: string;
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
  telegram?: string;
  rememberData?: boolean;
  agreeToRules?: boolean;
}

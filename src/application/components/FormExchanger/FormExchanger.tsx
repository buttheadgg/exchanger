import React, { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import styles from "./FormExchanger.module.scss";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import { PUBLIC_IMAGE } from "../../constants";
import FormBodyCryprtoBank from "./FormBodyCryprtoBank/FormBodyCryprtoBank";
import FormBodyCryptoCash from "./FormBodyCryptoCash/FormBodyCryptoCash";
import FormBodyCashCrypto from "./FormBodyCashCrypto/FormBodyCashCrypto";
import FormBodyBankCrypto from "./FormBodyBankCrypto/FormBodyBankCrypto";
import formStore from "../../stores/formStore";
import { JsonData } from "../types/types";
import { observer } from "mobx-react-lite";
import FormBodyCryptoCrypto from "./FormBodyCryptoCrypto/FormBodyCryptoCrypto";

const FormExchanger: FC = observer(() => {
  const formHeaderImage = PUBLIC_IMAGE + "Main-logoImage.svg";
  const [isValid, setIsValid] = useState<boolean>(true);
  const [selectedPay, setSelectedPay] = useState("");
  const [selectedReceive, setSelectedReceive] = useState("");
  const [limitsPay, setLimitsPay] = useState({ min: "", max: "" });
  const [limitsReceive, setLimitsReceive] = useState({ min: "", max: "" });
  const [reductionCurr, setReductionCurr] = useState({ pay: "", receive: "" });
  const [curseRate, setCourseRate] = useState();

  const jsonData: JsonData = {
    Bitcoin: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Bitcoin (BTC)",
      id: "93",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Bitcoin BEP20": {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Bitcoin BEP20 (BTCB)",
      id: "43",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Monero: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Monero (XMR)",
      id: "149",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Toncoin: {
      directions: {
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
      },
      cur_name: "Toncoin (TON)",
      id: "209",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Ethereum: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Ethereum (ETH)",
      id: "139",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Ethereum BEP20": {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Ethereum BEP20 (ETH)",
      id: "212",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Tether ERC20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Tether ERC20 (USDT)",
      id: "36",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Tether TRC20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Tether TRC20 (USDT)",
      id: "10",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Tether BEP20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Tether BEP20 (USDT)",
      id: "208",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Tether Solana": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Tether SOL (USDT)",
      id: "180",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "USD Coin ERC20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "USDC ERC20 (USDC)",
      id: "23",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "USD Coin BEP20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "USDC BEP20 (USDC)",
      id: "235",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "USD Coin Solana": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "USDC SOL (USDC)",
      id: "228",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Litecoin: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Litecoin (LTC)",
      id: "99",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Bitcoin Cash": {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Bitcoin Cash (BCH)",
      id: "172",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Dash: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Dash (DASH)",
      id: "140",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Zcash: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
      },
      cur_name: "Zcash (ZEC)",
      id: "162",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Ether Classic": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Ethereum Classic (ETC)",
      id: "160",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Tron: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "TRON (TRX)",
      id: "185",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Cardano: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Cardano (ADA)",
      id: "181",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Dogecoin: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Dogecoin (DOGE)",
      id: "115",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Binance Coin BEP20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "BinanceCoin BEP20 (BNB)",
      id: "19",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Chainlink BEP20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Chainlink (LINK)",
      id: "197",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "Uniswap BEP20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Uniswap (UNI)",
      id: "202",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Polkadot: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Polkadot (DOT)",
      id: "201",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Polygon: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Polygon (POL)",
      id: "138",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Solana: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Solana (SOL)",
      id: "82",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "SHIBA INU ERC20": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Shiba BEP20 (SHIB)",
      id: "32",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Tezos: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Tezos (XTZ)",
      id: "175",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Algorand: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Algorand (ALGO)",
      id: "216",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Avalanche: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Tether AVALANCHE (USDT)",
      id: "169",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    VeChain: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "VeChain (VET)",
      id: "8",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    NEO: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "NEO (NEO)",
      id: "177",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    "NEAR Protocol": {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "NEAR Protocol (NEAR)",
      id: "76",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Verge: {
      directions: {
        Сбербанк: {
          id: "42",
          name: "Sberbank RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Tinkoff-банк": {
          id: "105",
          name: "T-Bank (Tinkoff) RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "bank",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Альфа-банк": {
          id: "52",
          name: "Alfa-Bank RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        Райффайзен: {
          id: "157",
          name: "Raiffeisen RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Карта Мир": {
          id: "17",
          name: "Mir сard RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Visa/Mastercard RUB": {
          id: "59",
          name: "Bank card RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        СБП: {
          id: "21",
          name: "SBP RUB",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
        "Любой Банк": {
          id: "0",
          name: "Other bank",
          type: "bank",
          min: "1",
          max: "100",
          reserve: "999",
        },
      },
      cur_name: "Verge (XVG)",
      id: "124",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Ripple: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
      },
      cur_name: "Ripple (XRP)",
      id: "161",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Stellar: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
      },
      cur_name: "Stellar (XLM)",
      id: "182",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Cosmos: {
      directions: {
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Наличные RUB": {
          id: "91",
          name: "Cash RUB",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
        "Наличные USD": {
          id: "89",
          name: "Cash USD",
          min: "1",
          max: "100",
          reserve: "999",
          type: "cash",
        },
      },
      cur_name: "Cosmos (ATOM)",
      id: "198",
      min: "1",
      max: "100",
      type: "crypto",
      rate: "999",
    },
    Сбербанк: {
      directions: {
        Bitcoin: {
          id: "93",
          name: "Bitcoin (BTC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin BEP20": {
          id: "43",
          name: "Bitcoin BEP20 (BTCB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Monero: {
          id: "149",
          name: "Monero (XMR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ethereum: {
          id: "139",
          name: "Ethereum (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ethereum BEP20": {
          id: "212",
          name: "Ethereum BEP20 (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether ERC20": {
          id: "36",
          name: "Tether ERC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether Solana": {
          id: "180",
          name: "Tether SOL (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "USD Coin ERC20": {
          id: "23",
          name: "USDC ERC20 (USDC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin Cash": {
          id: "172",
          name: "Bitcoin Cash (BCH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dash: {
          id: "140",
          name: "Dash (DASH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Zcash: {
          id: "162",
          name: "Zcash (ZEC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ether Classic": {
          id: "160",
          name: "Ethereum Classic (ETC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tron: {
          id: "185",
          name: "TRON (TRX)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cardano: {
          id: "181",
          name: "Cardano (ADA)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dogecoin: {
          id: "115",
          name: "Dogecoin (DOGE)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Binance Coin BEP20": {
          id: "19",
          name: "BinanceCoin BEP20 (BNB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Chainlink BEP20": {
          id: "197",
          name: "Chainlink (LINK)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Uniswap BEP20": {
          id: "202",
          name: "Uniswap (UNI)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polkadot: {
          id: "201",
          name: "Polkadot (DOT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polygon: {
          id: "138",
          name: "Polygon (POL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Solana: {
          id: "82",
          name: "Solana (SOL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "SHIBA INU ERC20": {
          id: "32",
          name: "Shiba BEP20 (SHIB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tezos: {
          id: "175",
          name: "Tezos (XTZ)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Algorand: {
          id: "216",
          name: "Algorand (ALGO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Avalanche: {
          id: "169",
          name: "Tether AVALANCHE (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        NEO: {
          id: "177",
          name: "NEO (NEO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "NEAR Protocol": {
          id: "76",
          name: "NEAR Protocol (NEAR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Verge: {
          id: "124",
          name: "Verge (XVG)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ripple: {
          id: "161",
          name: "Ripple (XRP)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Stellar: {
          id: "182",
          name: "Stellar (XLM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cosmos: {
          id: "198",
          name: "Cosmos (ATOM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
      },
      cur_name: "Sberbank RUB",
      id: "42",
      min: "1",
      max: "100",
      type: "bank",
      rate: "999",
    },
    "Tinkoff-банк": {
      directions: {
        Bitcoin: {
          id: "93",
          name: "Bitcoin (BTC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin BEP20": {
          id: "43",
          name: "Bitcoin BEP20 (BTCB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Monero: {
          id: "149",
          name: "Monero (XMR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ethereum: {
          id: "139",
          name: "Ethereum (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ethereum BEP20": {
          id: "212",
          name: "Ethereum BEP20 (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether ERC20": {
          id: "36",
          name: "Tether ERC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether Solana": {
          id: "180",
          name: "Tether SOL (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "USD Coin ERC20": {
          id: "23",
          name: "USDC ERC20 (USDC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin Cash": {
          id: "172",
          name: "Bitcoin Cash (BCH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dash: {
          id: "140",
          name: "Dash (DASH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Zcash: {
          id: "162",
          name: "Zcash (ZEC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ether Classic": {
          id: "160",
          name: "Ethereum Classic (ETC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tron: {
          id: "185",
          name: "TRON (TRX)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cardano: {
          id: "181",
          name: "Cardano (ADA)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dogecoin: {
          id: "115",
          name: "Dogecoin (DOGE)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Binance Coin BEP20": {
          id: "19",
          name: "BinanceCoin BEP20 (BNB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Chainlink BEP20": {
          id: "197",
          name: "Chainlink (LINK)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Uniswap BEP20": {
          id: "202",
          name: "Uniswap (UNI)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polkadot: {
          id: "201",
          name: "Polkadot (DOT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polygon: {
          id: "138",
          name: "Polygon (POL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Solana: {
          id: "82",
          name: "Solana (SOL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "SHIBA INU ERC20": {
          id: "32",
          name: "Shiba BEP20 (SHIB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tezos: {
          id: "175",
          name: "Tezos (XTZ)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Algorand: {
          id: "216",
          name: "Algorand (ALGO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Avalanche: {
          id: "169",
          name: "Tether AVALANCHE (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        NEO: {
          id: "177",
          name: "NEO (NEO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "NEAR Protocol": {
          id: "76",
          name: "NEAR Protocol (NEAR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Verge: {
          id: "124",
          name: "Verge (XVG)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ripple: {
          id: "161",
          name: "Ripple (XRP)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Stellar: {
          id: "182",
          name: "Stellar (XLM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cosmos: {
          id: "198",
          name: "Cosmos (ATOM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
      },
      cur_name: "T-Bank (Tinkoff) RUB",
      id: "105",
      min: "1",
      max: "100",
      type: "bank",
      rate: "999",
    },
    "Наличные RUB": {
      directions: {
        Bitcoin: {
          id: "93",
          name: "Bitcoin (BTC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin BEP20": {
          id: "43",
          name: "Bitcoin BEP20 (BTCB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Monero: {
          id: "149",
          name: "Monero (XMR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Toncoin: {
          id: "209",
          name: "Toncoin (TON)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ethereum: {
          id: "139",
          name: "Ethereum (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ethereum BEP20": {
          id: "212",
          name: "Ethereum BEP20 (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether ERC20": {
          id: "36",
          name: "Tether ERC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether Solana": {
          id: "180",
          name: "Tether SOL (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "USD Coin ERC20": {
          id: "23",
          name: "USDC ERC20 (USDC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Litecoin: {
          id: "99",
          name: "Litecoin (LTC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin Cash": {
          id: "172",
          name: "Bitcoin Cash (BCH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dash: {
          id: "140",
          name: "Dash (DASH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Zcash: {
          id: "162",
          name: "Zcash (ZEC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ether Classic": {
          id: "160",
          name: "Ethereum Classic (ETC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tron: {
          id: "185",
          name: "TRON (TRX)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cardano: {
          id: "181",
          name: "Cardano (ADA)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dogecoin: {
          id: "115",
          name: "Dogecoin (DOGE)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Binance Coin BEP20": {
          id: "19",
          name: "BinanceCoin BEP20 (BNB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Chainlink BEP20": {
          id: "197",
          name: "Chainlink (LINK)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Uniswap BEP20": {
          id: "202",
          name: "Uniswap (UNI)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polkadot: {
          id: "201",
          name: "Polkadot (DOT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polygon: {
          id: "138",
          name: "Polygon (POL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Solana: {
          id: "82",
          name: "Solana (SOL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "SHIBA INU ERC20": {
          id: "32",
          name: "Shiba BEP20 (SHIB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tezos: {
          id: "175",
          name: "Tezos (XTZ)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Algorand: {
          id: "216",
          name: "Algorand (ALGO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Avalanche: {
          id: "169",
          name: "Tether AVALANCHE (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        VeChain: {
          id: "8",
          name: "VeChain (VET)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        NEO: {
          id: "177",
          name: "NEO (NEO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "NEAR Protocol": {
          id: "76",
          name: "NEAR Protocol (NEAR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Verge: {
          id: "124",
          name: "Verge (XVG)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ripple: {
          id: "161",
          name: "Ripple (XRP)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Stellar: {
          id: "182",
          name: "Stellar (XLM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cosmos: {
          id: "198",
          name: "Cosmos (ATOM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
      },
      cur_name: "Cash RUB",
      id: "91",
      min: "1",
      max: "100",
      type: "cash",
      rate: "999",
    },
    "Наличные USD": {
      directions: {
        Bitcoin: {
          id: "93",
          name: "Bitcoin (BTC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin BEP20": {
          id: "43",
          name: "Bitcoin BEP20 (BTCB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Monero: {
          id: "149",
          name: "Monero (XMR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Toncoin: {
          id: "209",
          name: "Toncoin (TON)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ethereum: {
          id: "139",
          name: "Ethereum (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ethereum BEP20": {
          id: "212",
          name: "Ethereum BEP20 (ETH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether ERC20": {
          id: "36",
          name: "Tether ERC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether TRC20": {
          id: "10",
          name: "Tether TRC20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether BEP20": {
          id: "208",
          name: "Tether BEP20 (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Tether Solana": {
          id: "180",
          name: "Tether SOL (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "USD Coin ERC20": {
          id: "23",
          name: "USDC ERC20 (USDC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Litecoin: {
          id: "99",
          name: "Litecoin (LTC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Bitcoin Cash": {
          id: "172",
          name: "Bitcoin Cash (BCH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dash: {
          id: "140",
          name: "Dash (DASH)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Zcash: {
          id: "162",
          name: "Zcash (ZEC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Ether Classic": {
          id: "160",
          name: "Ethereum Classic (ETC)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tron: {
          id: "185",
          name: "TRON (TRX)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cardano: {
          id: "181",
          name: "Cardano (ADA)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Dogecoin: {
          id: "115",
          name: "Dogecoin (DOGE)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Binance Coin BEP20": {
          id: "19",
          name: "BinanceCoin BEP20 (BNB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Chainlink BEP20": {
          id: "197",
          name: "Chainlink (LINK)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "Uniswap BEP20": {
          id: "202",
          name: "Uniswap (UNI)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polkadot: {
          id: "201",
          name: "Polkadot (DOT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Polygon: {
          id: "138",
          name: "Polygon (POL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Solana: {
          id: "82",
          name: "Solana (SOL)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "SHIBA INU ERC20": {
          id: "32",
          name: "Shiba BEP20 (SHIB)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Tezos: {
          id: "175",
          name: "Tezos (XTZ)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Algorand: {
          id: "216",
          name: "Algorand (ALGO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Avalanche: {
          id: "169",
          name: "Tether AVALANCHE (USDT)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        VeChain: {
          id: "8",
          name: "VeChain (VET)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        NEO: {
          id: "177",
          name: "NEO (NEO)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        "NEAR Protocol": {
          id: "76",
          name: "NEAR Protocol (NEAR)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Verge: {
          id: "124",
          name: "Verge (XVG)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Ripple: {
          id: "161",
          name: "Ripple (XRP)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Stellar: {
          id: "182",
          name: "Stellar (XLM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
        Cosmos: {
          id: "198",
          name: "Cosmos (ATOM)",
          min: "1",
          max: "100",
          reserve: "999",
          type: "crypto",
        },
      },
      cur_name: "Cash USD",
      id: "89",
      min: "1",
      max: "100",
      type: "cash",
      rate: "999",
    },
  };

  const payOptions = Object.keys(jsonData);
  const receiveOptions = useMemo(() => {
    return selectedPay
      ? Object.keys(jsonData[selectedPay]?.directions || {})
      : [];
  }, [selectedPay]);

  useEffect(() => {
    getCourse();
  }, [formStore.formCourse]);

  const getCourse = async () => {
    try {
      const res = await fetch("http://alfa-crypto.com/api/v1/exchange/rate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formStore.formCourse),
      });

      const result = await res.json();

      let minReserve = result.inmin * result.rate;
      setLimitsPay({ min: result.inmin || "", max: result.inmax || "" });
      setReductionCurr({
        pay: result.from_cur_code,
        receive: result.to_cur_code,
      });
      setCourseRate(result.rate);
      formStore.setReceiveMin(
        minReserve.toString() ? minReserve.toString() : "0"
      );
      formStore.updateConvert("response", result);
      formStore.updateField("changer_id", result.changer_id);
      setLimitsReceive({
        min: minReserve.toString() || "",
        max: result.max_reserve || "",
      });
    } catch {
      console.error("Ошибка при выполнении fetch-запроса rate:");
    }
  };

  const sendData = async () => {
    try {
      // Отправка запроса
      const res = await fetch(
        "http://alfa-crypto.com/api/v1/exchange/confirm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formStore.formData),
        }
      );

      if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
      }

      const result = await res.json();

      if (result.transactionId) {
        formStore.updateField("transactionId", result.transactionId);
        console.log(`Transaction ID записан:`, formStore.formData);
      } else {
        console.warn("Transaction ID отсутствует в ответе.");
      }

      formStore.updateFinalData("response", result);
    } catch (error) {
      console.error("Ошибка при выполнении fetch-запроса confirm:", error);
    }
  };

  useEffect(() => {
    getCourse();
  }, [formStore.formCourse]);

  useEffect(() => {
    if (payOptions.length > 0 && !selectedPay) {
      const defaultPay = payOptions[0];
      setSelectedPay(defaultPay);
      formStore.updateField("pay", defaultPay);
      formStore.updateField("payId", jsonData[defaultPay].id);
      formStore.updateForm("pay", defaultPay);
      formStore.updateForm("payId", jsonData[defaultPay].id);
      getCourse();
      console.log("Полученный курс", formStore.formConvert);
    }
  }, [payOptions]);

  useEffect(() => {
    if (selectedPay && receiveOptions.length > 0 && !selectedReceive) {
      const defaultReceive = receiveOptions[0];
      setSelectedReceive(defaultReceive);
      formStore.updateField("receive", defaultReceive);
      formStore.updateField("receiveId", jsonData[defaultReceive].id);
      formStore.updateForm("receive", defaultReceive);
      formStore.updateForm("receiveId", jsonData[defaultReceive].id);
      getCourse();
      console.log("Полученный курс", formStore.formConvert);
    }
  }, [selectedPay, receiveOptions]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formStore.updateField(name, value);

    const numericValue = value;
    if (name === "paySelect") {
      formStore.updateForm("payValue", value);
      getCourse();
      formStore.updateInput("paySelect", numericValue);
      const calculatedValue =
        parseFloat(numericValue) * formStore.formConvert.rate;
      console.log(calculatedValue);
      console.log(formStore.formConvert.rate);
      formStore.updateInput("receiveSelect", calculatedValue.toString());
    } else if (name === "receiveSelect") {
      formStore.updateForm("receiveValue", value);
      getCourse();
      formStore.updateInput("paySelect", numericValue);
      if (parseFloat(numericValue)) {
        formStore.updateInput("paySelect", 0);
      } else {
        const calculatedValue =
          formStore.formConvert.rate / parseFloat(numericValue);
        formStore.updateInput("paySelect", calculatedValue);
      }
    }
  };

  const handlePaySelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    const selectedPay = jsonData[value];
    setSelectedPay(value);
    formStore.updateField(name, value);
    formStore.updateField("payId", selectedPay.id);
    formStore.updateForm(name, value);
    formStore.updateForm("payId", selectedPay.id);

    const firstReceiveOption = Object.keys(jsonData[value]?.directions)[0];
    const firstReceiveType = jsonData[firstReceiveOption].type;
    setSelectedReceive(firstReceiveOption);
    formStore.updateField("receive", firstReceiveOption);
    formStore.updateForm("receive", firstReceiveOption);

    let activeComponent = "";
    let direction = "";

    if (firstReceiveType === "crypto" && selectedPay.type === "cash") {
      activeComponent = "cash-crypto";
      direction = "cash-crypto";
    } else if (firstReceiveType === "cash" && selectedPay.type === "crypto") {
      activeComponent = "crypto-cash";
      direction = "crypto-cash";
    } else if (firstReceiveType === "bank" && selectedPay.type === "crypto") {
      activeComponent = "crypto-bank";
      direction = "crypto-bank";
    } else if (firstReceiveType === "crypto" && selectedPay.type === "bank") {
      activeComponent = "bank-crypto";
      direction = "bank-crypto";
    } else if (firstReceiveType === "crypto" && selectedPay.type === "crypto") {
      activeComponent = "crypto-crypto";
      direction = "crypto-crypto";
    }

    if (activeComponent && direction) {
      formStore.setActiveComponent(activeComponent);
      formStore.updateField("direction", direction);
      formStore.updateForm("direction", direction);
    }

    getCourse();
    console.log("Полученный курс", formStore.formConvert);
  };

  const handleReceiveSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    formStore.updateField(name, value);

    setSelectedReceive(value);

    const selectedDirection = jsonData[selectedPay]?.directions[value];
    formStore.updateField("receiveId", selectedDirection.id);
    formStore.updateForm("receiveId", selectedDirection.id);

    if (selectedDirection) {
      setSelectedReceive(value);

      let activeComponent = "";
      let direction = "";

      if (
        selectedDirection.type === "crypto" &&
        jsonData[selectedPay].type === "cash"
      ) {
        activeComponent = "cash-crypto";
        direction = "cash-crypto";
      } else if (
        selectedDirection.type === "cash" &&
        jsonData[selectedPay].type === "crypto"
      ) {
        activeComponent = "crypto-cash";
        direction = "crypto-cash";
      } else if (
        selectedDirection.type === "bank" &&
        jsonData[selectedPay].type === "crypto"
      ) {
        activeComponent = "crypto-bank";
        direction = "crypto-bank";
      } else if (
        selectedDirection.type === "crypto" &&
        jsonData[selectedPay].type === "bank"
      ) {
        activeComponent = "bank-crypto";
        direction = "bank-crypto";
      }

      if (activeComponent && direction) {
        formStore.setActiveComponent(activeComponent);
        formStore.updateField("direction", direction);
        formStore.updateForm("direction", direction);
      }

      getCourse();
      console.log("Полученный курс", formStore.formConvert);
    }
  };

  const handleSubmit = () => {
    const validationResult = formStore.validateFields();

    if (validationResult) {
      console.log("Форма валидна, данные:", formStore.formData);
      console.log("Данные на курс:", formStore.formCourse);
      console.log("Полученный курс", formStore.formConvert);
      formStore.setDataValid(true);
      sendData();
    } else {
      console.log("Ошибки валидации:", formStore.invalidInputs);
      formStore.dataValid = false;
    }
  };

  return (
    <div className={styles.form__exchanger}>
      <div className={styles.information__line}>
        <div className={styles.information__lightBox}></div>
        <div className={styles.main__informationLogo}>
          <img src={formHeaderImage} alt="" />
        </div>
      </div>
      <div className={styles.form__wrapper}>
        <div className={styles.form__header}>
          <div className={styles.pay__wrapper}>
            <div className={styles.form__headerPay}>Pay</div>
            <div className={styles.form__pay}>
              <div className={styles.form__payValue}>
                <select
                  className={styles.form__paySelect}
                  name="pay"
                  value={selectedPay}
                  onChange={handlePaySelectChange}
                >
                  {payOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <MyInput
                  name="paySelect"
                  className={styles.form__payInputValue}
                  onChange={handleChange}
                  placeHolder="0"
                  isInvalid={formStore.invalidInputs.paySelect}
                  value={formStore.formCourse.paySelect}
                />
              </div>
              <div className={styles.form__payBottomInput}>
                <div className={styles.form__payExchangeRate}>
                  Exchange rate
                  <div className={styles.form__payExchangeRateText}>
                    1 {reductionCurr.pay} = <br></br> {curseRate}{" "}
                    {reductionCurr.receive}
                  </div>
                </div>
                <div className={styles.form__payLimits}>
                  <div>
                    min.: {limitsPay.min} {reductionCurr.pay}
                  </div>
                  <div>
                    max.: {limitsPay.max} {reductionCurr.pay}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form__headerLine}></div>
          <div className={styles.form__headerLine2}></div>
          <div className={styles.form__headerLine3}></div>
          <div className={styles.receive__wrapper}>
            <div className={styles.form__headerReceive}>Receive</div>
            <div className={styles.form__receive}>
              <div className={styles.form__receiveValue}>
                <select
                  className={styles.form__receiveSelect}
                  value={selectedReceive}
                  name="receive"
                  onChange={handleReceiveSelectChange}
                  disabled={!selectedPay}
                >
                  {receiveOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <MyInput
                  name="receiveSelect"
                  className={styles.form__receiveInputValue}
                  onChange={handleChange}
                  placeHolder="0"
                  isInvalid={formStore.invalidInputs.receiveSelect}
                  value={formStore.formCourse.receiveSelect}
                />
              </div>
              <div className={styles.form__payLimits}>
                <div>
                  min.: {limitsReceive.min} {reductionCurr.receive}
                </div>
                <div>
                  max.: {limitsReceive.max} {reductionCurr.receive}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form__body}></div>
        {formStore.activeComponent === "cash-crypto" && <FormBodyCashCrypto />}
        {formStore.activeComponent === "bank-crypto" && <FormBodyBankCrypto />}
        {formStore.activeComponent === "crypto-bank" && <FormBodyCryprtoBank />}
        {formStore.activeComponent === "crypto-cash" && <FormBodyCryptoCash />}
        {formStore.activeComponent === "crypto-crypto" && (
          <FormBodyCryptoCrypto />
        )}
      </div>
      <MyButton onClick={handleSubmit} className={styles.form__button}>
        EXCHANGE
      </MyButton>
      <div
        className={`${
          formStore.activeComponent === "cashCrypto" &&
          formStore.invalidInputs.paySelect
            ? styles.form__formBottomText
            : styles.form__formBottomTextNone
        }`}
      >
        The amount of cash must be at least $ 150,00
      </div>
    </div>
  );
});

export default FormExchanger;

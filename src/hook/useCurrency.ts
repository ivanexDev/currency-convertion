import { ChangeEvent, useEffect, useState } from "react";
import { getCurrencies, getExchange } from "../services/currencyExchange";
import { Currency } from "../types";

const useCurrency = () => {
  const [originValue, setOriginValue] = useState<string>("1");
  const [isNotNumber, setIsNotNumber] = useState<boolean>(false);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [exchange, setExchange] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(event.target.value)) || Number(event.target.value) < 0) {
      setIsNotNumber(true);
    } else {
      setIsNotNumber(false);
    }
    setOriginValue(event.target.value);
  };

  const handleCurrencySelect = (
    event: ChangeEvent<HTMLSelectElement>,
    select?: "base"
  ) => {
    if (select === "base") {
      setBaseCurrency(event.target.value);
    } else {
      setTargetCurrency(event.target.value);
    }
  };

  useEffect(() => {
    getCurrencies().then((res) => {
      setCurrencies(res);
    });
  }, []);

  useEffect(() => {
    getExchange(baseCurrency, targetCurrency)
      .then((res) => {
        setExchange(res.data[targetCurrency]);
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          setErrorMessage(err.message);
        }

        if (err) {
          setErrorMessage("Error, can't get data");
        }
      });
  }, [baseCurrency, targetCurrency]);

  const changeSelects = () => {
    const temp = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temp);
  };

  return {
    originValue,
    isNotNumber,
    baseCurrency,
    targetCurrency,
    exchange,
    errorMessage,
    currencies,
    handleValue,
    handleCurrencySelect,
    changeSelects,
  };
};

export default useCurrency;

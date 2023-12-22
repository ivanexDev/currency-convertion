import { FormEvent } from "react";
import useCurrency from "../../hook/useCurrency";
import "./Form.css";
import { ChangeButton, Input, Result, Select } from "..";

const Form = () => {
  const {
    originValue,
    baseCurrency,
    targetCurrency,
    exchange,
    isNotNumber,
    errorMessage,
    currencies,
    handleCurrencySelect,
    handleValue,
    changeSelects,
  } = useCurrency();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="form-card" action="" onSubmit={handleSubmit}>
        <div className="inputs-card">
          <Input
            handleValue={handleValue}
            isNotNumber={isNotNumber}
            originValue={originValue}
          />
          <Select
            currencies={currencies}
            currencyType={baseCurrency}
            handleCurrencySelect={handleCurrencySelect}
            type="base"
            label="From"
          />
          <ChangeButton changeSelects={changeSelects} />
          <Select
            currencies={currencies}
            currencyType={targetCurrency}
            handleCurrencySelect={handleCurrencySelect}
            label="To"
          />
        </div>
        <div className="result-card">
          <Result
            currencies={currencies}
            isNotNumber={isNotNumber}
            originValue={originValue}
            baseCurrency={baseCurrency}
            targetCurrency={targetCurrency}
            errorMessage={errorMessage}
            exChange={exchange}
          />
        </div>
      </form>
    </>
  );
};

export default Form;

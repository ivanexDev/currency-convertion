import { ChangeButton, Input, Result, Select, Title } from "./components";
import "./global.css";
import useCurrency from "./hook/useCurrency";
import { FormEvent } from "react";

function App() {
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
      <main className="container-card">
        <Title />
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
      </main>
    </>
  );
}

export default App;

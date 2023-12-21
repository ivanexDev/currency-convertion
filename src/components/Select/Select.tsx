import "./Select.css";
import { ChangeEvent } from "react";
import { Currency } from "../../types";

interface SelectProps {
  currencies: Currency[];
  currencyType: string;
  handleCurrencySelect: (
    event: ChangeEvent<HTMLSelectElement>,
    select?: "base"
  ) => void;
  type?: "base";
  label: string;
}

const Select: React.FC<SelectProps> = ({
  currencyType,
  handleCurrencySelect,
  type,
  label,
  currencies,
}) => {
  return (
    <div className="form-section">
      <label className="form-label" htmlFor="">
        {label}
      </label>
      <select
        className="form-select"
        value={currencyType}
        onChange={(e) => {
          handleCurrencySelect(e, type);
        }}
        name="base"
        id="base"
      >
        {currencies.map((currency, index) => {
          return (
            <option key={`${currency.code}-${index}`} value={currency.code}>
              {currency.code} {currency.symbol_native}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

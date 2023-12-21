import "./Result.css";
import { calculate } from "../../utils/utils";
import { Currency } from "../../types";
interface ResultProps {
  originValue: string;
  baseCurrency: string;
  targetCurrency: string;
  isNotNumber: boolean;
  errorMessage: string;
  exChange: number;
  currencies: Currency[];
}

const Result: React.FC<ResultProps> = (props) => {
  const currentCurrency = props.currencies.find(
    (currency) => currency.code === props.targetCurrency
  );

  const result = calculate(Number(props.originValue), props.exChange).toFixed(
    currentCurrency?.decimal_digits
  );
  const isSingleCurrencyUnit = () => {
    if (Number(result) <= 1) {
      return true;
    }
    return false;
  };

  return (
    <>
      {props.errorMessage ? (
        <p className="error-message">{props.errorMessage}</p>
      ) : (
        <div>
          <p>
            {!props.isNotNumber ? props.originValue : null} {props.baseCurrency}{" "}
            =
          </p>
          <h2 className="result">
            {result}{" "}
            <span>
              {isSingleCurrencyUnit()
                ? currentCurrency?.code
                : currentCurrency?.name_plural}
            </span>
          </h2>
        </div>
      )}
    </>
  );
};

export default Result;

import "./Input.css";

interface InputProps {
  originValue: string;
  isNotNumber: boolean;
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  originValue,
  isNotNumber,
  handleValue,
}) => {
  return (
    <div className="form-section">
      <label htmlFor="" className="form-label">
        Amount
      </label>
      <input
        className="form-input"
        value={originValue}
        onChange={(e) => handleValue(e)}
        type="text"
      />
      {isNotNumber ? (
        <p className="error-input">Error: Please enter positive numbers.</p>
      ) : null}
    </div>
  );
};

export default Input;

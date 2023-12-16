import React from "react";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import "./Counter.scss";

const Counter = ({ count, setCount }) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter-btn" onClick={handleDecrement}>
        <MinusIcon className="minus-icon" />
        <span className="no-display">
          Når du klikker på knappen trækker du 1 prodrukt fra
        </span>
      </button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={handleIncrement}>
        <PlusIcon className="plus-icon" />
        <span className="no-display">
          Når du klikker på knappen lægger du 1 produkt til
        </span>
      </button>
    </div>
  );
};
export default Counter;

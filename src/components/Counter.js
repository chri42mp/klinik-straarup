import React, { useState } from "react";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

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
      </button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={handleIncrement}>
        <PlusIcon className="plus-icon" />
      </button>
    </div>
  );
};
export default Counter;

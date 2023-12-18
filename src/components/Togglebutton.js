import React, { useState } from "react";
import "./Togglebuttons.scss";

const ToggleButton = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <label className={`toggle ${isChecked ? "checked" : ""}`}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="toggle-control"></span>
    </label>
  );
};

export default ToggleButton;

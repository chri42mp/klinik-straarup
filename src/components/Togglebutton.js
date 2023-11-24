import React from "react";
import "./Togglebuttons.scss";

const ToggleButton = () => {
  return (
    <div className="display">
      <label className="label toggle">
        <input type="checkbox" className="toggle-input" />
        <div className="toggle-control"></div>
      </label>
    </div>
  );
};

export default ToggleButton;

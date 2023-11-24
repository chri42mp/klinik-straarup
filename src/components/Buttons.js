import React, { useState } from "react";
import "./Buttons.scss";


const BaseButton = ({ text, onClick, className, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${isHovered ? "hovered" : ""} ${
        isPressed ? "pressed" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={isPressed}
    >
      {text}
      {icon}
    </button>
  );
};

const PrimaryButton = ({ text, onClick }) => (
  <BaseButton text={text} onClick={onClick} className="btn-primary" />
);

const SecondaryButton = ({ text, onClick }) => (
  <BaseButton text={text} onClick={onClick} className="btn-secondary" />
);

const TertiaryButtonWithIcon = ({ text, onClick, icon }) => (
  <BaseButton
    text={text}
    icon={icon}
    onClick={onClick}
    className="btn-tertiary-icon"
  />
);

export { PrimaryButton, SecondaryButton, TertiaryButtonWithIcon };

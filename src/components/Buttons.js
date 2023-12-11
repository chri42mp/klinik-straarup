import "./Buttons.scss";
import { Link } from "react-router-dom";

const BaseButton = ({ text, onClick, className, icon, link }) => {
  const ButtonComponent = link ? Link : "button";

  return (
    <ButtonComponent to={link} onClick={onClick} className={`btn ${className}`}>
      {text}
      {icon}
    </ButtonComponent>
  );
};

const PrimaryButton = ({ text, onClick, link }) => (
  <BaseButton
    text={text}
    onClick={onClick}
    className="btn-primary"
    link={link}
  />
);

const SecondaryButton = ({ text, onClick, link }) => (
  <BaseButton
    text={text}
    onClick={onClick}
    className="btn-secondary"
    link={link}
  />
);

const TertiaryButtonWithIcon = ({ text, onClick, icon, link }) => (
  <BaseButton
    text={text}
    icon={icon}
    onClick={onClick}
    className="btn-tertiary-icon"
    link={link}
  />
);

export { PrimaryButton, SecondaryButton, TertiaryButtonWithIcon };

import "./Buttons.scss";

const BaseButton = ({ text, onClick, className, icon }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
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

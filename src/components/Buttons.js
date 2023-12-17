import './Buttons.scss';
import { Link } from 'react-router-dom';

const BaseButton = ({ text, onClick, className, icon, link, disabled }) => {
  const ButtonComponent = link ? Link : 'button';

  return (
    <ButtonComponent
      to={link}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {text}
      {icon}
    </ButtonComponent>
  );
};

const PrimaryButton = ({ text, onClick, link, disabled }) => (
  <BaseButton
    text={text}
    onClick={onClick}
    className='btn-primary'
    link={link}
    disabled={disabled}
  />
);

const SecondaryButton = ({ text, onClick, link, disabled }) => (
  <BaseButton
    text={text}
    onClick={onClick}
    className='btn-secondary'
    link={link}
    disabled={disabled}
  />
);

const TertiaryButtonWithIcon = ({ text, onClick, icon, link, disabled }) => (
  <BaseButton
    text={text}
    icon={icon}
    onClick={onClick}
    className='btn-tertiary-icon'
    link={link}
    disabled={disabled}
  />
);

export { PrimaryButton, SecondaryButton, TertiaryButtonWithIcon };

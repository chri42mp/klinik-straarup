import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './Buttons';
import './Hero.scss';

const Hero = ({
  title,
  subtitle,
  text,
  imageUrl,
  alt,
  buttonText,
  buttonIcon,
  onButtonClick,
}) => {
  return (
    <div className='hero-banner'>
      <img src={imageUrl} alt={alt} />
      <div className='hero-banner-box'>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <p>{text}</p>
        <div>
          <PrimaryButton text={buttonText} onClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.element.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Hero;

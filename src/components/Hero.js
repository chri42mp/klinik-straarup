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
  link,
}) => {
  return (
    <div className='hero-banner'>
      <img src={imageUrl} alt={alt} />
      <div className='hero-banner-box'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        <div>
          <PrimaryButton
            text={buttonText}
            onClick={onButtonClick}
            link={link}
          />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  buttonText: PropTypes.string,
  buttonIcon: PropTypes.element,
  onButtonClick: PropTypes.func,
  link: PropTypes.func,
};

export default Hero;

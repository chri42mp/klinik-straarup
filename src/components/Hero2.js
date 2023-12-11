import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './Buttons';
import './Hero2.scss';

const Hero2 = ({
  title,
  subtitle,
  text,
  imageUrl,
  alt,
  buttonText,
  buttonIcon,
  onButtonClick,
  reverse,
}) => {
  return (
    <div className='hero2-banner'>
      <div className='hero2-banner-image'>
        <img src={imageUrl} alt={alt} />
      </div>
      <div className='hero2-banner-box'>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <PrimaryButton text={buttonText} onClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
};

Hero2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.element.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
};

export default Hero2;

import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './Buttons';
import './Hero2.scss';

const Hero2 = ({
  title,
  text,
  imageUrl,
  alt,
  buttonText,
  buttonIcon,
  onButtonClick,
}) => {
  return (
    <section className='container-width'>
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
    </section>
  );
};

Hero2.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  buttonText: PropTypes.string,
  buttonIcon: PropTypes.element,
  onButtonClick: PropTypes.func,
};

export default Hero2;

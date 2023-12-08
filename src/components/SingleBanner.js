import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './Buttons';
import './SingleBanner.scss';

const SingleBanner = ({
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
    <div className={`single-banner ${reverse ? 'reverse' : ''}`}>
      <div className='single-banner-box' style={{ order: reverse ? 2 : 1 }}>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
        <p>{text}</p>
        <div>
          <PrimaryButton text={buttonText} onClick={onButtonClick} />
        </div>
      </div>
      <div className='single-banner-image' style={{ order: reverse ? 1 : 2 }}>
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

SingleBanner.propTypes = {
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

export default SingleBanner;

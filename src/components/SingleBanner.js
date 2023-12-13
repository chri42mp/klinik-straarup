import React from 'react';
import PropTypes from 'prop-types';
import { SecondaryButton } from './Buttons';
import './SingleBanner.scss';

const SingleBanner = ({
  title,
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
        <p>{text}</p>
        <div>
          <SecondaryButton text={buttonText} link={'/webshop'} />
        </div>
      </div>
      <div className='single-banner-image' style={{ order: reverse ? 1 : 2 }}>
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

SingleBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  buttonText: PropTypes.string,
  buttonIcon: PropTypes.element,
  onButtonClick: PropTypes.func,
  reverse: PropTypes.bool,
};

export default SingleBanner;

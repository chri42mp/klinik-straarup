import React from 'react';
import PropTypes from 'prop-types';

import './FullBanner.scss';

const FullBanner = ({
  title,
  subtitle,
  text,
  imageUrl,
  alt,

  reverse,
}) => {
  return (
    <div className={`full-banner ${reverse ? 'reverse' : ''}`}>
      <div className='full-banner-image' style={{ order: reverse ? 1 : 2 }}>
        <img src={imageUrl} alt={alt} />
      </div>
      <div className='full-banner-text' style={{ order: reverse ? 2 : 1 }}>
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

FullBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default FullBanner;

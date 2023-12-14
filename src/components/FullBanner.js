import React from 'react';
import PropTypes from 'prop-types';

import './FullBanner.scss';

const FullBanner = ({ title, subtitle, text, imageUrl, alt, reverse }) => {
  return (
    <section className='container-width'>
      <div className={`full-banner ${reverse ? 'reverse' : ''}`}>
        <div className='full-banner-image' style={{ order: reverse ? 2 : 1 }}>
          <img src={imageUrl} alt={alt} />
        </div>
        <div className='full-banner-text' style={{ order: reverse ? 1 : 2 }}>
          <h2>{title}</h2>
          <h5>{subtitle}</h5>
          <div>{text}</div>
        </div>
      </div>
    </section>
  );
};

FullBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.object,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  reverse: PropTypes.bool,
};

export default FullBanner;

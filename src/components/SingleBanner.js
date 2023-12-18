import React from "react";
import PropTypes from "prop-types";

import "./SingleBanner.scss";

const SingleBanner = ({ title, subtitle, text, imageUrl, alt, reverse }) => {
  return (
    <div className='max-content'>
      <div className={`single-banner ${reverse ? 'reverse' : ''}`}>
        <div className='single-banner-box' style={{ order: reverse ? 2 : 1 }}>
          <h1>{title}</h1>
          <h5>{subtitle}</h5>
          <p>{text}</p>
        </div>
        <div className='single-banner-image' style={{ order: reverse ? 1 : 2 }}>
          <img src={imageUrl} alt={alt} />
        </div>

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
  reverse: PropTypes.bool,
};

export default SingleBanner;

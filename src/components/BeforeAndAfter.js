import React from "react";
import PropTypes from "prop-types";
import "./BeforeAndAfter.scss";

const BeforeAndAfter = ({ title, imageUrl1, alt1, imageUrl2, alt2 }) => {
  return (
    <section className="max-content">
      <div className="double-banner">
        <div className="double-banner-title">
          <h1>{title}</h1>
        </div>
        <div className="double-banner-image-box">
          <img src={imageUrl1} alt={alt1} loading="lazy" />
          <img src={imageUrl2} alt={alt2} loading="lazy" />
        </div>
      </div>
    </section>
  );
};

BeforeAndAfter.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl1: PropTypes.string.isRequired,
  alt1: PropTypes.string.isRequired,
  imageUrl2: PropTypes.string.isRequired,
  alt2: PropTypes.string.isRequired,
};

export default BeforeAndAfter;

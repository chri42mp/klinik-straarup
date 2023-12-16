import React from "react";
import PropTypes from "prop-types";
import { TertiaryButtonWithIcon } from "./Buttons";
import "./TextboxBanners.scss";

const TextboxBanner = ({
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
    <div className={`banner ${reverse ? "reverse" : ""}`}>
      <div className="banner-image" style={{ order: reverse }}>
        <img src={imageUrl} alt={alt} />
      </div>
      <div className="banner-box" style={{ order: reverse }}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          <TertiaryButtonWithIcon
            text={buttonText}
            onClick={onButtonClick}
            icon={buttonIcon}
          />
        </div>
      </div>
    </div>
  );
};

TextboxBanner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  buttonText: PropTypes.string,
  buttonIcon: PropTypes.element,
  onButtonClick: PropTypes.func,
  reverse: PropTypes.bool,
};

export default TextboxBanner;

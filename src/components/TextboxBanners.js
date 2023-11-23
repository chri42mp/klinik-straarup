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
      <div className="banner-box" style={{ order: reverse ? 2 : 1 }}>
        <h2>{title}</h2>
        <p>{text}</p>
        <TertiaryButtonWithIcon
          text={buttonText}
          onClick={onButtonClick}
          icon={buttonIcon}
        />
      </div>
      <div className="banner-image" style={{ order: reverse ? 1 : 2 }}>
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

TextboxBanner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.element.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
};

export default TextboxBanner;

import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="spinner">
      <div className="spinner-circle">
        <div className="spinner-circle-gradient"></div>

        <div className="spinner-circle-inner"></div>
      </div>
    </div>
  );
};

export default Loader;

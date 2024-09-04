/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ArrowForwardIos = ({ className, arrowForwardIos = "/img/arrow-forward-ios-11.png" }) => {
  return <img className={`arrow-forward-ios ${className}`} alt="Arrow forward ios" src={arrowForwardIos} />;
};

ArrowForwardIos.propTypes = {
  arrowForwardIos: PropTypes.string,
};

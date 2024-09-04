/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AiFillEye = ({ className, aiFillEye = "/img/aifilleye-1.png" }) => {
  return <img className={`ai-fill-eye ${className}`} alt="Ai fill eye" src={aiFillEye} />;
};

AiFillEye.propTypes = {
  aiFillEye: PropTypes.string,
};

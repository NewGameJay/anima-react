/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ChevronRight = ({ size, className, img = "/img/size-48-1.png" }) => {
  return (
    <img
      className={`chevron-right ${size} ${className}`}
      alt="Size"
      src={
        size === "sixteen"
          ? "/img/size-16-1.png"
          : size === "twenty"
          ? "/img/size-20-1.png"
          : size === "twenty-four"
          ? "/img/size-24-1.png"
          : size === "thirty-two"
          ? "/img/size-32-1.png"
          : size === "forty"
          ? "/img/size-40-1.png"
          : img
      }
    />
  );
};

ChevronRight.propTypes = {
  size: PropTypes.oneOf(["sixteen", "twenty-four", "forty-eight", "twenty", "thirty-two", "forty"]),
  img: PropTypes.string,
};

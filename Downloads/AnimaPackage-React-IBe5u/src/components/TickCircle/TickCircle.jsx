/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TickCircle = ({ style, className, styleOutline = "/img/style-outline-1.png" }) => {
  return (
    <img
      className={`tick-circle ${className}`}
      alt="Style linear"
      src={
        style === "bold"
          ? "/img/style-bold-1.png"
          : style === "outline"
          ? styleOutline
          : style === "twotone"
          ? "/img/style-twotone-1.png"
          : style === "bulk"
          ? "/img/style-bulk-1.png"
          : style === "broken"
          ? "/img/style-broken-1.png"
          : "/img/style-linear-1.png"
      }
    />
  );
};

TickCircle.propTypes = {
  style: PropTypes.oneOf(["twotone", "broken", "outline", "bold", "linear", "bulk"]),
  styleOutline: PropTypes.string,
};

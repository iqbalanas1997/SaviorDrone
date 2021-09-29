import React from "react";
import "./Switch.css";

const Switch = () => {
  return (
    <label>
      <p className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </p>
    </label>
  );
};

export default Switch;

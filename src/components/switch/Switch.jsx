import React from "react";
import "./switch.css";

export default function Switch(props) {
  const { onDarkModeClick, isDarkModeActive } = props;
  return (
    <div className="switch" onClick={onDarkModeClick}>
      {isDarkModeActive ? (
        <i className="fas fa-moon"></i>
      ) : (
        <i className="fas fa-sun"></i>
      )}
    </div>
  );
}

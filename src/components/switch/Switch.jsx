import React from "react";
import "./switch.css";

export default function Switch(props) {
  const { onDarkModeClick, isDarkModeActive } = props;
  return (
    <div className="button__toggle-dark-mode" onClick={onDarkModeClick}>
      {isDarkModeActive ? (
        <i className="fas fa-moon"></i>
      ) : (
        <i className="fas fa-sun"></i>
      )}
    </div>
  );
}

import React, { useContext } from "react";
import { ThemeContext } from "../../helper/ThemeContext";
import "./switch.css";

export default function Switch() {
  const context = useContext(ThemeContext);

  return (
    <div className={`outer-circle ${context.theme}`}>
      <div
        className={`inner-circle ${context.theme}`}
        onClick={context.onDarkModeClick}
      >
        {context.theme === "dark" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </div>
    </div>
  );
}

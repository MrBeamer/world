import React, { useContext } from "react";
import { ThemeContext } from "../../helper/ThemeContext";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button({ theme }) {
  const context = useContext(ThemeContext);
  return (
    <Link className={`btn ${context.theme}`} to="/">
      <i className="fas fa-arrow-left"></i> <span>Back</span>
    </Link>
  );
}

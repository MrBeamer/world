import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button({ theme }) {
  return (
    <Link to="/">
      <button className={`btn__nav ${theme}`}>
        <i className="fas fa-arrow-left"></i> <span>Back</span>
      </button>
    </Link>
  );
}

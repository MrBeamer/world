import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button({ theme }) {
  return (
    <Link className={`btn ${theme}`} to="/">
      <i className="fas fa-arrow-left"></i> <span>Back</span>
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button() {
  return (
    <Link to="/">
      <button className="btn__nav">
        <i className="fas fa-arrow-left"></i> <span>Back</span>
      </button>
    </Link>
  );
}

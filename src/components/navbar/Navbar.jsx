import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../helper/ThemeContext";
import { Searchfield, Filter, Button } from "../../components";
import "./navbar.css";

export default function Navbar() {
  const context = useContext(ThemeContext);
  const location = useLocation();

  return (
    <nav className={`nav ${context.theme}`}>
      {location.pathname === "/" ? (
        <>
          <Searchfield theme={context.theme} />
          <Filter theme={context.theme} />
        </>
      ) : (
        <Button theme={context.theme} />
      )}
    </nav>
  );
}

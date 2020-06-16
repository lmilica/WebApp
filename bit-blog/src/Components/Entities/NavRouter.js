import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export const NavRouter = () => {
  return (
    <nav className="Home__nav">
      <h1>BIT BLOG</h1>
      <ul className="Home__links">
        <li>
          <Link to="/"> Home </Link>{" "}
        </li>

        <li>
          <Link to="/authors"> Authors </Link>
        </li>

        <li>
          <Link to="/about"> About </Link>
        </li>
      </ul>
    </nav>
  );
};

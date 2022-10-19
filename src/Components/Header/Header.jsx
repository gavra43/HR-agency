import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="header">
      <Link to="/">
        <h1>LBS Consulting</h1>
      </Link>
      <Link to="hire-developer">Hire new developer</Link>
    </div>
  );
}

export default Header;

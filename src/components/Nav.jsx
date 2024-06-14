import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navWrapper">
      <div className="nav">
        <div className="logo">
          <h1>RECOM</h1>
        </div>
        <div>
          <Link to="/" className="navitems">
            Home
          </Link>
          {/* <Link to="/search" className="navitems">
            Recommendations
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;

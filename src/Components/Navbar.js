import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          My Movies
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

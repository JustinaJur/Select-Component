import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="c-navigation">
      <button>
        <Link to="/">1</Link>
      </button>
      <button>
        <Link to="/example2">2</Link>
      </button>
    </nav>
  );
};

export default Navigation;

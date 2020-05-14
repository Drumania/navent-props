import React from "react";
import logoNavent from "../assets/img/navent.png";

const Header = () => {
  return (
    <nav className="navbar navbar-light fixed-top bg-white mb-4">
      <div className="container">
        <a className="navbar-brand" href="#!">
          <img src={logoNavent} alt="navent" />
        </a>
        <span className="float-right text-right text-secondary">
          martinbrumana@gmail.com
        </span>
      </div>
    </nav>
  );
};

export default Header;

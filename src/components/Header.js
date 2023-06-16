import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = () => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-extend-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defautProps = { branding: "My App" };
Header.propTypes = { branding: PropTypes.string.isRequired };

export default Header;

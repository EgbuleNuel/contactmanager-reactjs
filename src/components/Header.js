import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = () => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

Header.defautProps = { branding: "My App" };
Header.propTypes = { branding: PropTypes.string.isRequired };

export default Header;

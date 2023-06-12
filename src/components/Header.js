import React, { Component } from "react";

const Header = () => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};
export default Header;

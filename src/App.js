import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="jdoe@gmail.com" phone="0234 234 2342" />
      <Contact
        name="Karen Smith"
        email="ksmith@gmail.com"
        phone="5555 555 5555"
      />
      <Contact
        name="Jimmy Hoffa"
        email="jhoffa@gmail.com"
        phone="1234 567 8901"
      />
    </div>
  );
}

export default App;

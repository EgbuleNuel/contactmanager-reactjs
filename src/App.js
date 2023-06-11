import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="jdoe@gmail.com" phone="0234 234 2342" />
    </div>
  );
}

export default App;

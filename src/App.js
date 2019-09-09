import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/Navbar.js";
import EmployeeList from "./components/EmployeeList.js";
import "./App.css";

const contentful = require("contentful");

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <EmployeeList />
    </div>
  );
}

export default App;

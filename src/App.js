import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/Navbar.js";
import EmployeeList from "./components/EmployeeList.js";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EmployeeDetails from "./components/EmployeeDetails.js";
import { makeStyles } from "@material-ui/core/styles";

const contentful = require("contentful");

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Grid container xs={12} spacing={5} style={{ padding: "30px" }}>
          <Grid item xs={5}>
            <Paper>
              <EmployeeList />
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper style={{ minHeight: "100%" }}>
              <EmployeeDetails />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;

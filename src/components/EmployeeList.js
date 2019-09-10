import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import EmployeeCard from "./EmployeeCard.js";
import * as contentful from "contentful";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const client = contentful.createClient({
  space: "g0omatv81ux3",
  accessToken: "9Ulv6nTh08-nO_1Mu1pEoOrjVB2YxCV7mDBNE8UyXt0"
});

class EmployeeList extends Component {
  state = {
    employees: [],
    searchString: ""
  };

  constructor() {
    super();
    this.getEmployees();
  }

  getEmployees = () => {
    client
      .getEntries({
        content_type: "image",
        query: this.state.searchString
      })
      .then(response => {
        this.setState({
          employees: response.items
        });
      })
      .catch(error => {
        console.log("error occured while fetching data!");
      });
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({
        searchString: event.target.value
      });
    } else {
      this.setState({
        searchString: ""
      });
    }
    this.getEmployees();
    console.log(this.state.employees);
  };

  render() {
    return (
      <div>
        {this.state.employees ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Enter search term here!"
              margin="normal"
              onChange={this.onSearchInputChange}
            ></TextField>
            <Grid container spacing={2} style={{ padding: 24 }}>
              {this.state.employees.map(currentEmployee => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  xl={12}
                  style={{
                    border: "1px solid #e3e3e3",
                    margin: 10,
                    background: "#edf4ff"
                  }}
                >
                  <EmployeeCard employee={currentEmployee}> </EmployeeCard>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{
                      margin: "10px",
                      maxWidth: 150
                    }}
                    // SelectedEmployee={props.employee}
                  >
                    More Details
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No courses found!"
        )}
      </div>
    );
  }
}

export default EmployeeList;

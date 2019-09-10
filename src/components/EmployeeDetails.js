import React from "react";
import Grid from "@material-ui/core/Grid";
import GridTitle from "@material-ui/core/GridListTile";
import Typography from "@material-ui/core/Typography";
import * as contentful from "contentful";
import "typeface-roboto";
import "typeface-montserrat";

const client = contentful.createClient({
  space: "g0omatv81ux3",
  accessToken: "9Ulv6nTh08-nO_1Mu1pEoOrjVB2YxCV7mDBNE8UyXt0"
});

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmployee: props.currentEmployee
    };
  }

  render() {
    if (this.state.currentEmployee) {
      //Should render the details about the employee
    } else {
      //Should render message
      return (
        <div
          style={{
            fontSize: "30px",
            fontFamily: "montserrat",
            textAlign: "center",
            padding: "70px 0"
          }}
        >
          Please select an employee from the left side to get more details
        </div>
      );
    }
  }
}

export default EmployeeDetails;

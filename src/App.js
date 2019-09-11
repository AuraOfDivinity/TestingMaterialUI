import React from "react";
import NavBar from "./components/Navbar.js";
import EmployeeList from "./components/EmployeeList.js";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EmployeeDetails from "./components/EmployeeDetails.js";

class App extends React.Component {
  state = {
    selectedEmployee: ""
  };

  handleSelection = employeeValue => {
    this.setState({ selectedEmployee: employeeValue });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div>
          <Grid container xs={12} spacing={5} style={{ padding: "30px" }}>
            <Grid item xs={5}>
              <Paper>
                <EmployeeList onSelectEmployee={this.handleSelection} />
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Paper style={{ minHeight: "100%" }}>
                <EmployeeDetails chosenOne={this.state.selectedEmployee} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <NavBar></NavBar>
//       <div>
//         <Grid container xs={12} spacing={5} style={{ padding: "30px" }}>
//           <Grid item xs={5}>
//             <Paper>
//               <EmployeeList />
//             </Paper>
//           </Grid>
//           <Grid item xs={7}>
//             <Paper style={{ minHeight: "100%" }}>
//               <EmployeeDetails />
//             </Paper>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// }

export default App;

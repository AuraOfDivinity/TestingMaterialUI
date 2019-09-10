import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as contentful from "contentful";
import "typeface-roboto";
import "typeface-montserrat";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const client = contentful.createClient({
  space: "g0omatv81ux3",
  accessToken: "9Ulv6nTh08-nO_1Mu1pEoOrjVB2YxCV7mDBNE8UyXt0"
});

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmployee: props.SelectedEmployee
    };
  }

  render() {
    if (true) {
      //Should render the details about the employee
      return (
        <div>
          <Card className={useStyles.card}>
            <CardActionArea>
              <CardMedia
                className={useStyles.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                // title={this.props.SelectedEmployee.fields.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {this.props.SelectedEmployee.fields.imageCaption} */}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      );
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

import React from "react";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import "typeface-montserrat";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "g0omatv81ux3",
  accessToken: "9Ulv6nTh08-nO_1Mu1pEoOrjVB2YxCV7mDBNE8UyXt0"
});

class EmployeeDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItem: [],
      chosenOne: ""
    };
  }

  componentDidMount() {
    //Called after the initial mount of the component
    client
      .getEntry(this.props.chosenOne)
      .then(items => {
        this.setState({ currentItem: items });
        // if (!payload.items.length) {
        //   console.log("no payload");
        // } else {
        //   console.log("payload found!");
        // }
        console.log(this.state.currentItem.fields.photo.fields.file.url);
      })
      .catch(error => {
        console.log("error occured");
      });
  }

  componentDidUpdate() {
    if (this.props.chosenOne !== this.state.chosenOne)
      //Without the if statement componentdidmount will infinitely loop
      client
        .getEntry(this.props.chosenOne)
        .then(items => {
          this.setState({
            currentItem: items,
            chosenOne: this.props.chosenOne,
            imgLink: items.fields.photo.fields.file.url
          });

          console.log(this.state.imgLink);
        })
        .catch(error => {
          console.log("error occured");
        });
  }

  render() {
    if (this.props.chosenOne) {
      return (
        <div>
          <Card style={{}}>
            <CardActionArea>
              <CardMedia
                style={{
                  height: 300,
                  width: "100%",
                  margin: "0 auto"
                }}
                image={this.state.currentItem.fields.photo.fields.file.url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.state.currentItem.fields.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.state.currentItem.fields.imageCaption}
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

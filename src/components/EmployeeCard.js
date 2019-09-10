import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: "g0omatv81ux3",
  accessToken: "9Ulv6nTh08-nO_1Mu1pEoOrjVB2YxCV7mDBNE8UyXt0"
});

const EmployeeCard = props => {
  return (
    <div>
      {props.employee ? (
        <Card>
          <CardMedia
            style={{ height: 140 }}
            image={props.employee.fields.photo.fields.file.url}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.employee.fields.title}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default EmployeeCard;

import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const EmployeeCard = props => {
  return (
    <div>
      {props.employee ? (
        <Card>
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

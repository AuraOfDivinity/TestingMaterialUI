import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "25%"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const EmployeeCard = props => {
  const classes = useStyles();
  return (
    <div>
      {props.employee ? (
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={props.employee.fields.photo.fields.file.url}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {props.employee.fields.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.employee.fields.imageCaption}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default EmployeeCard;

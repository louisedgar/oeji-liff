import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(8),
      height: theme.spacing(6)
    },
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5
  }
}));

function Menu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
    </div>
  );
}

export default Menu;

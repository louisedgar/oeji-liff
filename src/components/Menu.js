import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AppsIcon from "@material-ui/icons/Apps";

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
      <Paper elevation={3}>Jenis Soal</Paper>
      <Paper elevation={3}>
        <AccessTimeIcon />
      </Paper>
      <Paper elevation={3}>
        <AppsIcon />
      </Paper>
    </div>
  );
}

export default Menu;

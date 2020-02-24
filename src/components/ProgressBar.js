import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 5,
    backgroundColor: lighten("#8c7200", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#fccd04"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  },
  margin: {
    margin: theme.spacing(1)
  },
  justify: {
    justifyContent: "center"
  }
}));

function ProgressBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={props.progress}
      />
    </div>
  );
}

export default ProgressBar;

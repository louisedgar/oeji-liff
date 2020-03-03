import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ViewList from "@material-ui/icons/ViewList";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Timer from "./Timer";
// import ButtonRow from "./ButtonRow";

import { Link } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";

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
    opacity: 0.8
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontWeight: "900"
  },
  paperIcon: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "90%",
    maxHeight: "95%",
    borderRadius: "15px",
    borderStyle: "none",
    border: "none",
    outline: "none"
  }
}));

function Menu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        TKA
      </Paper>
      <Paper elevation={3} className={classes.paper}>
        <Timer />
      </Paper>
      <Link to="/hasil">
        <Paper elevation={3} className={classes.paperIcon} onClick={handleOpen}>
          <DoneIcon
            style={{ width: "30px", height: "26px", color: "#fccd04" }}
          />
        </Paper>
      </Link>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <div>
              <ButtonRow
                setQuestion={props.setQuestion}
                questions={props.questions}
              />
            </div>
          </div>
        </Fade>
      </Modal> */}
    </div>
  );
}

export default Menu;

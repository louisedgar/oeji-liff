import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ViewList from "@material-ui/icons/ViewList";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Timer from "./Timer";

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
    opacity: 0.7
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    fontWeight: "bold"
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
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
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
      <Paper elevation={3} className={classes.paperIcon} onClick={handleOpen}>
        <ViewList style={{ width: "35", height: "35" }} />
      </Paper>
      <Modal
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
            <h2 id="transition-modal-title">Daftar Soal</h2>
            <p id="transition-modal-description">Disini daftar soal</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Menu;

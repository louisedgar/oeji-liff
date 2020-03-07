import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ViewList from "@material-ui/icons/ViewList";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Timer from "./Timer";
import Submit from "./Submit";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00c853"
    },
    secondary: {
      main: "#d50000"
    }
  }
});

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
    fontWeight: "700"
  },
  paperIcon: {
    padding: theme.spacing(1),
    textAlign: "center",
    maxHeight: "48px"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "400px",
    maxWidth: "80%",
    minHeight: "60%",
    borderRadius: "15px",
    borderStyle: "none",
    border: "none",
    outline: "none"
  },
  button: {
    marginRight: "10px"
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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          TKA
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Timer />
        </Paper>

        <Paper elevation={3} className={classes.paperIcon} onClick={handleOpen}>
          <DoneIcon
            style={{
              width: "40px",
              height: "30px",
              color: "#fccd04"
            }}
          />
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
              <div>
                <Submit style={{ width: "300px", heigth: "300px" }} />
              </div>
              <div style={{ textAlign: "center", margin: "40px 0" }}>
                <Typography component="h1">
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      letterSpacing: "1px",
                      lineHheight: 1
                    }}
                  >
                    Yakin submit jawaban?
                  </span>
                </Typography>
                <br />
                <Typography variant="body2">
                  Cek kembali jawabanmu dan pastikan sudah memilih jawaban yang
                  menurutmu tepat.
                </Typography>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap"
                }}
              >
                <Link to="/hasil" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "10px", color: "#fff" }}
                    disableElevation="true"
                  >
                    Sudah yakin
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "10px" }}
                  onClick={handleClose}
                  disableElevation="true"
                >
                  Belum yakin
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default Menu;

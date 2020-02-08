import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./HasilCard.css";
import Decoration from "../assets/decoration.svg";
import Check from "@material-ui/icons/Check";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0074e1"
    },
    secondary: {
      main: "#fccd04"
    }
  }
});

const useStyles = makeStyles({
  root: {
    width: "80%",
    minHeight: "60%",
    textAlign: "center",
    margin: "0 auto",
    borderRadius: "15px"
  },

  title: {
    fontSize: "16px",
    fontWeight: "bolder",
    letterSpacing: "1px",
    lineHheight: 1,
    margin: "10px"
  },

  button: {
    paddingLeft: "20px",
    paddingRight: "20px",
    margin: "20px 0",
    textAlign: "center",
    width: "100 %"
  }
});

export default function HasilCard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <div className="hasil-card-decor">
          <img src={Decoration}></img>
        </div>
        <CardContent>
          <div
            className="hasil-icon"
            style={{
              width: "90px",
              height: "90px",
              alignItems: "center"
            }}
          >
            <Check
              color="secondary"
              style={{
                width: "50px",
                height: "50px",
                margin: "20px auto" // Important: centering the icon
              }}
            />
          </div>

          <Typography component="h1" className={classes.title}>
            Ujian Selesai
          </Typography>
          <Typography variant="body2" component="p">
            40 dari 50 soal berhasil kamu jawab dengan benar. Terus tingkatkan!
          </Typography>
        </CardContent>
        <div className={classes.button}>
          <CardActions>
            <Button
              className="btn-hasil"
              size="large"
              variant="outlined"
              color="secondary"
            >
              <span style={{ fontSize: "10px" }}>Dashboard</span>
            </Button>
          </CardActions>
          <CardActions>
            <Button
              className="btn-hasil"
              size="large"
              variant="outlined"
              color="secondary"
            >
              <span style={{ fontSize: "10px" }}>Keluar</span>
            </Button>
          </CardActions>
        </div>
      </Card>
    </ThemeProvider>
  );
}

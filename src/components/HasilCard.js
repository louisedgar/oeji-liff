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
import Done from "./Done";

import Grid from "@material-ui/core/Grid";

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

export default function HasilCard(props) {
  const classes = useStyles();
  const finalScore = props.score.filter(value => value === true);
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item style={{ margin: "auto" }}>
          <Card className={classes.root}>
            <div className="hasil-card-decor">
              <img src={Decoration} alt=""></img>
            </div>
            <CardContent>
              <div className="hasil-icon">
                <Done />
              </div>

              <Typography component="h1" className={classes.title}>
                Ujian Selesai
              </Typography>
              <Typography variant="body2" component="p">
                {finalScore.length} dari {props.score.length} soal berhasil kamu
                jawab dengan benar.{" "}
                {finalScore.length > 3
                  ? "Tetap belajar dan pertahankan!"
                  : "Jangan menyerah. Ayo tingkatkan!"}
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
                  <span style={{ fontSize: "12px" }}>Dashboard</span>
                </Button>
              </CardActions>
              <CardActions>
                <Button className="btn-hasil" size="large" variant="outlined">
                  <span style={{ fontSize: "12px" }}>Keluar</span>
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

import React from "react";
import Grid from "@material-ui/core/Grid";
import illustration from "../assets/illustration.png";
import "./Home.css";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0074e1"
    },
    secondary: {
      main: "#fccd04"
    }
  }
});
theme = responsiveFontSizes(theme);
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <header>
          <h1>oeji</h1>
        </header>
        <div className="home">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              m={6}
              style={{ maxWidth: "400px", marginBottom: "100px" }}
            >
              <Typography variant="h3" component="h2">
                Berani Oeji Dirimu?
              </Typography>
              <br />
              <Typography variant="body1">
                Ayo uji kesiapanmu dalam menghadapi UTBK dan tingkatkan
                pengetahuanmu disini.
              </Typography>
              <br />
              <br />
              <Link to="/soal" style={{ textDecoration: "none" }}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  disableElevation="true"
                >
                  Coba sekarang
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <img src={illustration} alt="" className="homeImage" />
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;

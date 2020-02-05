import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import "./SoalChoice.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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

export default function SoalChoice() {
  return (
    <ThemeProvider theme={theme}>
      <CardActions>
        <Button
          className="btn"
          size="medium"
          variant="outlined"
          color="secondary"
        >
          <span style={{ color: "black", fontSize: "10px" }}>Learn More</span>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="medium"
          variant="outlined"
          color="secondary"
        >
          <span style={{ color: "black", fontSize: "10px" }}>Learn More</span>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="medium"
          variant="outlined"
          color="secondary"
        >
          <span style={{ color: "black", fontSize: "10px" }}>Learn More</span>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="medium"
          variant="outlined"
          color="secondary"
        >
          <span style={{ color: "black", fontSize: "10px" }}>Learn More</span>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="medium"
          variant="outlined"
          color="secondary"
        >
          <span style={{ color: "black", fontSize: "10px" }}>Learn More</span>
        </Button>
      </CardActions>
    </ThemeProvider>
  );
}

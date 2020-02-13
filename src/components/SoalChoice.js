import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import "./SoalChoice.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

export default function SoalChoice(props) {
  return (
    <ThemeProvider theme={theme}>
      <CardActions onClick={props.handleChoice}>
        <Button
          className="btn"
          size="large"
          variant="outlined"
          color="secondary"
          style={{
            margin: "5px 0",
            justifyContent: "left"
          }}
        >
          <span style={{ marginRight: "10px" }}>A</span>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                textTransform: "none",
                marginLeft: "5px",
                textShadow: "none"
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo laborum perspiciatis accusamus exercitationem tempore
              illum laboriosam alias quam et ratione.
            </Typography>
          </div>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="large"
          variant="outlined"
          color="secondary"
          style={{ margin: "5px 0", justifyContent: "left" }}
        >
          <span style={{ marginRight: "10px" }}>B</span>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                textTransform: "none",
                marginLeft: "5px"
              }}
            >
              Lorem
            </Typography>
          </div>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="large"
          variant="outlined"
          color="secondary"
          style={{
            margin: "5px 0",
            justifyContent: "left"
          }}
        >
          <span style={{ marginRight: "10px" }}>C</span>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                textTransform: "none",
                marginLeft: "5px"
              }}
            >
              Lorem
            </Typography>
          </div>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="large"
          variant="outlined"
          color="secondary"
          style={{ margin: "5px 0", justifyContent: "left" }}
        >
          <span style={{ marginRight: "10px" }}>D</span>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                textTransform: "none",
                marginLeft: "5px"
              }}
            >
              Lorem
            </Typography>
          </div>
        </Button>
      </CardActions>
      <CardActions>
        <Button
          className="btn"
          size="large"
          variant="outlined"
          color="secondary"
          style={{ margin: "5px 0", justifyContent: "left" }}
        >
          <span style={{ marginRight: "10px" }}>E</span>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                textTransform: "none",
                marginLeft: "5px"
              }}
            >
              Lorem ipsum
            </Typography>
          </div>
        </Button>
      </CardActions>
    </ThemeProvider>
  );
}

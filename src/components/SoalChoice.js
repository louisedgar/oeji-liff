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
        >
          <span style={{ marginRight: "10px" }}>A</span>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum
              aperiam deserunt laborum? Tenetur enim obcaecati minima quod,
              quis, nemo, natus sit facere atque harum nihil mollitia! Magnam,
              cum labore?
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              voluptates non quibusdam sequi similique ea!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              placeat ipsum cum quod ab modi dignissimos deleniti impedit.
              Tenetur, officiis!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              dolore!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptas vel repellat repellendus cumque, voluptatem dicta? Id,
              quae.
            </Typography>
          </div>
        </Button>
      </CardActions>
    </ThemeProvider>
  );
}

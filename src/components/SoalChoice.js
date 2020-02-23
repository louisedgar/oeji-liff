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
  const choicesLetter = ["A", "B", "C", "D", "E"];
  const choices = props.questionChoice.choices.map((choice, index) => {
    return (
      <ThemeProvider theme={theme} key={index}>
        <CardActions
          key={index}
          onClick={() => props.handleChoice(choice.value, props.questionIndex)}
        >
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
            <span style={{ marginRight: "10px" }} key={index}>
              {choicesLetter[index]}
            </span>
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
                key={index}
              >
                {choice.text}
              </Typography>
            </div>
          </Button>
        </CardActions>
      </ThemeProvider>
    );
  });
  return <div>{choices}</div>;
}

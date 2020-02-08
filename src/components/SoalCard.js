import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SoalChoice from "./SoalChoice";
import "./SoalCard.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "70vh",
    borderRadius: "15px 15px 0 0",
    fontSize: "12px"
  }
});

function SoalCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className="sub-title" gutterBottom>
          <span
            style={{
              fontWeight: "bolder",
              fontSize: "12px",
              letterSpacing: "2px"
            }}
          >
            SOAL
          </span>
        </Typography>
        <div className="question">
          <Typography variant="body2" component="p" className={classes.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            totam repellat quisquam voluptate eveniet accusamus, saepe neque
            enim velit, consequatur harum tenetur ipsa perferendis ipsum vel
            architecto corporis eos earum odio cumque quia, nisi ut sint quasi.
          </Typography>
        </div>
      </CardContent>
      <div className="choice">
        <SoalChoice />
      </div>
    </Card>
  );
}

export default SoalCard;

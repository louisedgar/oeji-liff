import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SoalChoice from "./SoalChoice";
import "./SoalCard.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "70vh",
    borderRadius: "25px 25px 0 0"
  }
});

function SoalCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className="sub-title" gutterBottom>
          SOAL
        </Typography>
        <div className="question">
          <Typography variant="body1" component="p">
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

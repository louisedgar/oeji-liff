import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./SoalChoice.css";

export default function SoalChoice() {
  return (
    <CardActions>
      <Button className="btn" size="large" variant="outlined">
        Learn More
      </Button>
    </CardActions>
  );
}

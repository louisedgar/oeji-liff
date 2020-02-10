import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SoalChoice from "./SoalChoice";
import "./SoalCard.css";
import LeftArrowSwap from "./LeftArrow";
import RightArrowSwap from "./RightArrow";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    borderRadius: "15px 15px 0 0",
    fontSize: "12px"
  }
});

function SoalCardTwo(props) {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum, necessitatibus. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Obcaecati, explicabo?
          </Typography>
        </div>
      </CardContent>
      <div className="choice">
        <span style={{ color: "#0074e1" }}>PILIH JAWABAN</span>
        <div className="choice-list">
          <SoalChoice handleChoice={props.handleChoice} />
        </div>
      </div>
      <div className="swap-arrow">
        <LeftArrowSwap />
        <RightArrowSwap />
      </div>
    </Card>
  );
}

export default SoalCardTwo;

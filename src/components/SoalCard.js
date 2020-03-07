import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SoalChoice from "./SoalChoice";
import "./SoalCard.css";
import LeftArrowSwap from "./LeftArrow";
import RightArrowSwap from "./RightArrow";

class SoalCard extends Component {
  render() {
    return (
      <Card
        style={{
          marginTop: "30px",
          width: "100%",
          height: "100%",
          overflow: "auto",
          borderRadius: "15px 15px 0 0",
          textAlign: "left,"
        }}
      >
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
            <Typography variant="body2">{this.props.question.text}</Typography>
          </div>
        </CardContent>
        <div className="choice">
          <span
            style={{
              color: "#0074e1",
              fontWeight: "bolder",
              fontSize: "12px",
              letterSpacing: "1px"
            }}
          >
            PILIH JAWABAN
          </span>

          <div className="choice-list">
            <SoalChoice
              handleChoice={this.props.handleChoice}
              questionChoice={this.props.question}
              questionIndex={this.props.questionIndex}
              questionCard={this.props.questionCard}
            />
          </div>
        </div>
        <div className="swap-arrow">
          <LeftArrowSwap />
          <RightArrowSwap />
        </div>
      </Card>
    );
  }
}

export default SoalCard;

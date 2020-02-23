import React, { Component } from "react";
import "./ButtonRow.css";

class ButtonRow extends Component {
  render() {
    const rowAmount = Math.ceil(this.props.questions.length / 5);
    const buttonRows = [];
    for (let i = 0; i < rowAmount; i++) {
      buttonRows.push(i);
    }
    return (
      <div>
        {buttonRows.map((rows, index) => {
          return (
            <div
              className="buttonRow"
              style={{
                width: "100%",
                margin: "5px 0",
                display: "flex",
                justifyContent: "space-evenly"
              }}
              key={index}
            >
              {this.props.questions
                .slice(index * 5, index * 5 + 5)
                .map((btn, index) => {
                  return (
                    <button
                      style={{
                        height: "30px",
                        width: "30px",
                        margin: "5px",
                        backgroundColor: "#fff3c2",
                        borderColor: "#fff3c2",
                        borderRadius: "5px",
                        color: "grey",
                        borderStyle: "solid"
                      }}
                      key={btn["_id"]}
                      onClick={() => this.props.setQuestion(btn._id)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ButtonRow;

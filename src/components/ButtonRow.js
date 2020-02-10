import React, { Component } from "react";

class ButtonRow extends Component {
  render() {
    const dataAPI = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ];
    const rowAmount = Math.ceil(dataAPI.length / 5);
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
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-evenly"
              }}
              key={index}
            >
              {dataAPI.slice(index * 5, index * 5 + 5).map(btn => {
                return (
                  <button
                    style={{
                      height: "40px",
                      width: "40px",
                      margin: "5px",
                      backgroundColor: "white",
                      borderColor: "#fccd04",
                      borderRadius: "5px",
                      color: "grey",
                      borderStyle: "solid"
                    }}
                    key={btn}
                  >
                    {btn}
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

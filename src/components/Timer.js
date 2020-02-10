import React, { Component } from "react";

class Timer extends Component {
  state = {
    minutes: 10,
    seconds: 0
  };
  style = {
    color: this.state.minutes < 15 ? "#ff0000" : "#2adb15"
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => {
          return {
            seconds: seconds - 1
          };
        });
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => {
            return {
              minutes: minutes - 1,
              seconds: 59
            };
          });
        }
      }
    }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div style={this.style}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

export default Timer;

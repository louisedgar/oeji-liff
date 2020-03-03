import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/done.json";

class Done extends Component {
  state = {
    isStopped: false,
    isPaused: false
  };
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <div
        onClick={() => {
          this.setState({ isStopped: false, isPaused: false });
        }}
      >
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    );
  }
}
export default Done;

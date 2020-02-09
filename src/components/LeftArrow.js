import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/11516-swipe-left-arrows.json";

class LeftArrowSwap extends Component {
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
      <div>
        <Lottie
          options={defaultOptions}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          height={50}
          width={50}
        />
      </div>
    );
  }
}
export default LeftArrowSwap;

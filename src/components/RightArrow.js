import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/11515-swipe-right-arrows.json";

class RightArrowSwap extends Component {
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
        <Lottie options={defaultOptions} height={50} width={50} />
      </div>
    );
  }
}
export default RightArrowSwap;

import React, { Component } from "react";
import "./Soal.css";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SoalCard from "../components/SoalCard";
import SoalCardTwo from "../components/SoalCardTwo";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from "../components/Carousel";

class Soal extends Component {
  handleChoice = () => {
    console.log("halo dari button");
  };

  render() {
    return (
      <CssBaseline>
        <div className="soal-page">
          <div className="section-a">
            <div className="title">
              <h1>Soal UTBK Tahun 2018</h1>
              <p>SAINTEK</p>
            </div>
            <div className="menu">
              <Menu />
            </div>
            <div className="progress">
              <ProgressBar />
            </div>
          </div>

          <Carousel>
            <div style={{ height: "100%" }}>
              <SoalCard handleChoice={this.handleChoice} />
            </div>
            <div style={{ height: "100%" }}>
              <SoalCardTwo handleChoice={this.handleChoice} />
            </div>
          </Carousel>
        </div>
      </CssBaseline>
    );
  }
}

export default Soal;

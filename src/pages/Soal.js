import React, { Component } from "react";
import "./Soal.css";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SoalCard from "../components/SoalCard";

class Soal extends Component {
  render() {
    return (
      <div className="soal-page">
        <div className="section-a">
          <div>
            <h1 className="title">Soal UTBK Tahun 2018</h1>
            <p>SAINTEK</p>
            <Menu />
            <ProgressBar />
          </div>
        </div>
        <div className="section-b">
          <SoalCard />
        </div>
      </div>
    );
  }
}

export default Soal;

import React, { Component } from "react";
import "./Soal.css";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SoalCard from "../components/SoalCard";
import CssBaseline from "@material-ui/core/CssBaseline";

class Soal extends Component {
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
          <div className="section-b">
            <SoalCard />
          </div>
        </div>
      </CssBaseline>
    );
  }
}

export default Soal;

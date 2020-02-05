import React, { Component } from "react";
import "./Hasil.css";
import HasilCard from "../components/HasilCard";
import CssBaseline from "@material-ui/core/CssBaseline";

class Hasil extends Component {
  render() {
    return (
      <CssBaseline>
        <div className="hasil-page">
          <div className="hasil-card">
            <HasilCard />
          </div>
        </div>
      </CssBaseline>
    );
  }
}

export default Hasil;

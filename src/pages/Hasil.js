import React, { Component } from "react";
import "./Hasil.css";
import HasilCard from "../components/HasilCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";

class Hasil extends Component {
  render() {
    console.log(this.props.score);
    return (
      <CssBaseline>
        <div className="hasil-page">
          <HasilCard />
        </div>
      </CssBaseline>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.score
  };
};

export default connect(mapStateToProps, null)(Hasil);

import React, { Component } from "react";
import "./Soal.css";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SoalCard from "../components/SoalCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from "../components/Carousel";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestionsAction";
import { setActive } from "../redux/actions/setActiveAction";
import { setProgress } from "../redux/actions/setProgressAction";
import { setScore } from "../redux/actions/setScoreAction";
import { bindActionCreators } from "redux";
import Loading from "../components/Loading";

class Soal extends Component {
  _isLoading = true;
  handleChoice = (value, id, index) => {
    this.props.setActive(id, index);
    this.props.setScore(value, id);
    this.props.setProgress();
  };

  componentDidMount() {
    this._isLoading = false;
    this.props.getQuestions();
  }

  render() {
    const soalCard = this.props.questions.questions.map((question, index) => (
      <div style={{ height: "100%" }} key={question["_id"]}>
        <SoalCard
          handleChoice={this.handleChoice}
          question={question}
          questionIndex={index}
          questionCard={this.props.questions.questionCard}
        />
      </div>
    ));
    return (
      <CssBaseline>
        <div className="soal-page">
          <div className="section-a">
            <div className="title">
              <h1>Soal UTBK Tahun 2018</h1>
              <p>SAINTEK</p>
            </div>
            <div className="menu">
              <Menu questions={this.props.questions.questions} />
            </div>
            <div className="progress">
              <ProgressBar progress={this.props.questions.progress} />
            </div>
          </div>
          <Carousel>{soalCard}</Carousel>
        </div>
      </CssBaseline>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getQuestions: getQuestions,
      setActive: setActive,
      setProgress: setProgress,
      setScore: setScore
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Soal);

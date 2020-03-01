import React, { Component } from "react";
import "./Soal.css";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SoalCard from "../components/SoalCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from "../components/Carousel";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestionsAction";

class Soal extends Component {
  state = {
    questions: [],
    questionCard: {
      soal: "",
      pilihan: [{ a: "" }, { b: "" }, { c: "" }, { d: "" }, { e: "" }]
    },
    score: [],
    progress: 0
  };

  setQuestion = id => {
    this.setState({
      questionCard: this.state.questions._id === id
    });
  };

  setScore = (value, id) => {
    this.setState(prevState => {
      const newState = prevState.score.map((val, ind) => {
        if (ind === id) {
          return value;
        }
        return val;
      });
      return { score: newState };
    });
  };

  setActive = (id, index) => {
    this.setState(prevState => {
      const active = prevState.questions.map((val, ind) => {
        if (ind === id) {
          val.isActive = index;
        }
        return val;
      });
      return { questions: active };
    });
  };

  setProgress = () => {
    this.setState(prevState => {
      let newProgress = 0;
      for (let i = 0; i < prevState.score.length; i++) {
        if (prevState.score[i] === true || prevState.score[i] === false) {
          newProgress += 20;
        }
      }
      return { progress: newProgress };
    });
  };

  handleChoice = (value, id, index) => {
    this.setActive(id, index);
    this.setScore(value, id);
    this.setProgress();
  };

  // getQuestion = async () => {
  //   const res = await fetch(
  //     "https://floating-beyond-69236.herokuapp.com/api/questions"
  //   );

  //   const data = await res.json();

  //   const { choices } = data[0];
  //   const scoreValue = data.map(() => "");
  //   const newData = data.map(el => ({
  //     ...el,
  //     isActive: ""
  //   }));

  //   this.setState({
  //     questions: newData,
  //     questionCard: {
  //       soal: data[0].text,
  //       pilihan: choices
  //     },
  //     score: scoreValue
  //   });
  // };

  componentDidMount() {
    // this.getQuestion();
    this.props.getQuestions();
  }

  render() {
    const soalCard = this.props.questions.questions.map((question, index) => (
      <div style={{ height: "100%" }} key={question["_id"]}>
        <SoalCard
          handleChoice={this.handleChoice}
          question={question}
          questionIndex={index}
          questionCard={this.state.questionCard}
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
              <Menu
                setQuestion={this.setQuestion}
                questions={this.state.questions}
              />
            </div>
            <div className="progress">
              <ProgressBar progress={this.state.progress} />
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

export default connect(mapStateToProps, { getQuestions })(Soal);

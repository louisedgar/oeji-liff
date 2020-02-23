import React, { Component } from "react";
import "./Soal.css";
import Menu from "../components/Menu";
import ProgressBar from "../components/ProgressBar";
import SoalCard from "../components/SoalCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from "../components/Carousel";
// import SoalCard2 from "../components/SoalCard2";

class Soal extends Component {
  state = {
    questions: [],
    questionCard: {
      soal: "",
      pilihan: [{ a: "" }, { b: "" }, { c: "" }, { d: "" }, { e: "" }]
    },
    score: [false, false, false, false, false]
  };

  setQuestion = id => {
    console.log("halo dari button", id);
    this.setState({
      questionCard: this.state.questions._id === id
    });
  };

  handleChoice = (value, id) => {
    console.log("halo dari button", value, this.state.score[id]);

    this.setState(prevState => {
      const newState = prevState.score.map((val, ind) => {
        if (ind === id) {
          return value;
        }
        return val;
      });
      return { score: newState };
    });
    console.log(this.state.score);
  };

  getQuestion = async () => {
    const res = await fetch(
      "https://floating-beyond-69236.herokuapp.com/api/questions"
    );

    const data = await res.json();

    const { choices } = data[0];
    this.setState({
      questions: data,
      questionCard: {
        soal: data[0].text,
        pilihan: choices
      }
    });
  };

  componentDidMount() {
    this.getQuestion();
  }

  render() {
    console.log("score", this.state.score);
    console.log("questions", this.state.questions);
    const soalCard = this.state.questions.map((question, index) => (
      <div style={{ height: "100%" }} key={question["_id"]}>
        <SoalCard
          handleChoice={this.handleChoice}
          questionCard={question}
          questionIndex={index}
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
              <ProgressBar />
            </div>
          </div>

          <Carousel>{soalCard}</Carousel>
        </div>
      </CssBaseline>
    );
  }
}

export default Soal;

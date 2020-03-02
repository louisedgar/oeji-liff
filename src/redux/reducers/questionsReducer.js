import {
  GET_QUESTIONS,
  SET_ACTIVE,
  SET_PROGRESS,
  SET_SCORE
} from "../constant/actionTypes";

const initialState = {
  questions: [],
  questionCard: {
    soal: "",
    pilihan: []
  },
  score: [],
  progress: 0
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload.map(el => ({
          ...el,
          isActive: ""
        })),
        questionCard: {
          soal: action.payload[0].text,
          pilihan: action.payload[0].choices
        },
        score: action.payload.map(() => "")
      };
    case SET_ACTIVE:
      const active = state.questions.map((question, questionIndex) => {
        if (questionIndex === action.id) {
          question.isActive = action.index;
        }
        return question;
      });
      return {
        ...state,
        questions: active
      };
    case SET_SCORE:
      const newScore = state.score.map((value, index) => {
        if (index === action.id) {
          return action.value;
        }
        return value;
      });
      return {
        ...state,
        score: newScore
      };

    case SET_PROGRESS:
      let newProgress = 0;
      for (let i = 0; i < state.score.length; i++) {
        if (state.score[i] === true || state.score[i] === false) {
          newProgress += 20;
        }
      }
      return {
        ...state,
        progress: newProgress
      };

    default:
      return state;
  }
}

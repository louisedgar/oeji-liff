import { GET_QUESTIONS } from "../constant/actionTypes";

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
    default:
      return state;
  }
}

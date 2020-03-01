import { GET_QUESTIONS } from "../constant/actionTypes";

export function getQuestions() {
  return function(dispatch) {
    fetch("https://floating-beyond-69236.herokuapp.com/api/questions")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: GET_QUESTIONS,
          payload: data
        })
      );
  };
}

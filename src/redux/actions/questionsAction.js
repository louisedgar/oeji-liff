import { SET_QUESTIONS } from "../constant/actionTypes";

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    payload: questions
  };
}

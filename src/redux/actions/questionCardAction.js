import { SET_QUESTION_CARD } from "../constant/actionTypes";

export function setQuestionCard(questionCard) {
  return {
    type: SET_QUESTION_CARD,
    payload: questionCard
  };
}

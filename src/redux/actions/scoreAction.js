import { SET_SCORE } from "../constant/actionTypes";

export function setScore(score) {
  return {
    type: SET_SCORE,
    payload: score
  };
}

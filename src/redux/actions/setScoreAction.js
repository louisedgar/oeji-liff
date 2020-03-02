import { SET_SCORE } from "../constant/actionTypes";

export function setScore(value, id) {
  return {
    type: SET_SCORE,
    value,
    id
  };
}

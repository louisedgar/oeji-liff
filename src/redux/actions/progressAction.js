import { SET_PROGRESS } from "../constant/actionTypes";

export function setProgress(progress = 1) {
  return {
    type: SET_PROGRESS,
    payload: progress
  };
}

import { SET_ACTIVE } from "../constant/actionTypes";

export function setActive(id, index) {
  return {
    type: SET_ACTIVE,
    id,
    index
  };
}

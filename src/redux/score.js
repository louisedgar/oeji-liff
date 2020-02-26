export function setScore(score) {
  return {
    type: "SET_SCORE",
    payload: score
  };
}

export default function scoreReducer(score = [], action) {
  switch (action.type) {
    case "SET_SCORE":
      return [...score, action.payload];
    default:
      return score;
  }
}

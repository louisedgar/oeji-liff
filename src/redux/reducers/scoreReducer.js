export default function scoreReducer(score = [], action) {
  switch (action.type) {
    case "SET_SCORE":
      return [...score, action.payload];
    default:
      return score;
  }
}

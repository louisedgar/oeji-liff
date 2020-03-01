export default function questionCardReducer(questionCard = {}, action) {
  switch (action.type) {
    case "SET_QUESTION_CARD":
      return {
        ...questionCard
      };
    default:
      return questionCard;
  }
}

export function setQuestionCard(questionCard) {
  return {
    type: "SET_QUESTION_CARD",
    payload: questionCard
  };
}

const initialState = {
  soal: "",
  pilihan: [{ a: "" }, { b: "" }, { c: "" }, { d: "" }, { e: "" }]
};

export default function questionCardReducer(
  questionCard = initialState,
  action
) {
  switch (action.type) {
    case "SET_QUESTION_CARD":
      return {
        ...questionCard
      };
    default:
      return questionCard;
  }
}

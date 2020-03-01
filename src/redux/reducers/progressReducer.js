export default function progressReducer(progress = 0, action) {
  switch (action.type) {
    case "SET_PROGRESS":
      return progress + action.payload;
    default:
      return progress;
  }
}

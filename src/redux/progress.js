export function setProgress() {
  return {
    type: "SET_PROGRESS"
  };
}

export default function progressReducer(progress = 0, action) {
  switch (action.type) {
    case "SET_PROGRESS":
      return progress + 1;
    default:
      return progress;
  }
}

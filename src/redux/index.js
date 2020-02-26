import { createStore, combineReducers } from "redux";
import progressReducer from "./progress";
import questionCardReducer from "./questionCard";
import questionsReducer from "./questions";
import scoreReducer from "./score";

const rootReducer = combineReducers({
  questions: questionsReducer,
  questionCard: questionCardReducer,
  score: scoreReducer,
  progress: progressReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  store.getState();
});

export default store;

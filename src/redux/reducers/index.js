import { combineReducers } from "redux";
import progressReducer from "./progressReducer";
import questionCardReducer from "./questionCardReducer";
import questionsReducer from "./questionsReducer";
import scoreReducer from "./scoreReducer";

const rootReducer = combineReducers({
  questions: questionsReducer
});

export default rootReducer;

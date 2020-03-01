import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  store.getState();
});

export default store;

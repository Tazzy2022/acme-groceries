import { createStore, combineReducers, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import groceries from "./reducers/groceries";
import { viewReducer } from "./reducers/view";

const reducer = combineReducers({
  groceries,
  view: viewReducer,
});

// new state:
// {
//   groceries: [],
//   view: ""
// }

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

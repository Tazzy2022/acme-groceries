import { createStore, combineReducers, applyMiddleware } from "redux";
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { groceries } from './reducers/groceries'
import { view } from './reducers/view'

const reducer = combineReducers ({
  groceries,
  view
})

// new state:
// {
//   groceries: [],
//   view: ""
// }

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))



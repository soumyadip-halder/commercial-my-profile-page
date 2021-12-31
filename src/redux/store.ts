import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import loginReducer from "./Reducers/loginReducer";
import manageUserReducer from "./Reducers/manageUserReducer";

const reducer = combineReducers({
  loginReducer: loginReducer,
  manageUserReducer: manageUserReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;

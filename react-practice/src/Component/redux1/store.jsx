import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserReducer } from "./reducer/UserReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  userdata: UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

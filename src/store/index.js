import { combineReducers, createStore } from "redux";
import {  authSlice } from "./auth/authSlice";
import { calculatorSlice } from "./calculator/calculatorSlice";
const rootReducer = combineReducers({
  calculator: calculatorSlice.reducer,
  auth: authSlice.reducer,
});

export const store = createStore(rootReducer);

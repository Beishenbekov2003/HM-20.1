import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    result: 0,
  },
  reducers: {
    add(state, action) {
      state.result = state.result + action.payload;
    },
    divide(state, action) {
      state.result = state.result / action.payload;
    },
    subtract(state, action) {
      state.result = state.result - action.payload;
    },
    multiplay(state, action) {
      state.result = state.result * action.payload;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

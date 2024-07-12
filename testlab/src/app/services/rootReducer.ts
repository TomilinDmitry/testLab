import { combineReducers } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";

export const rootReducer = combineReducers({
  slider: sliderSlice,
});

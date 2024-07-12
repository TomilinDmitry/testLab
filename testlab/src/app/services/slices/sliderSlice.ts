import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSilder } from "../../types/types";

const initialState: TSilder = {
  currentIndex: 0,
  itemsPage: 0,
};
export const sliderSlicer = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});
export const { setCurrentIndex } = sliderSlicer.actions;

export default sliderSlicer.reducer;

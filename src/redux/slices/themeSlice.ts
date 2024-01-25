import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  value: string | null;
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: null,
  } as TInitialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
      return state;
    },
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;

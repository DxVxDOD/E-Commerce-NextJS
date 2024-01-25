import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  value: "dark" | "light" | null;
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: null,
  } as TInitialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"dark" | "light">) => {
      console.log("action payload", action.payload);
      state.value = action.payload;
      return state;
    },
    toggleTheme: (state) => {
      if (state.value === "dark") {
        state.value = "light";
      } else {
        state.value = "dark";
      }
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

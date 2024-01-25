import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import logger from "redux-logger";

export const makeStore = () => {
  return configureStore({
    reducer: { themeSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

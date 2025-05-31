import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from "./workspaceSlice";

const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

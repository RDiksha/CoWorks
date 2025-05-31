import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Workspace } from "../types/workspace";

interface WorkspaceState {
  workspaces: Workspace[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WorkspaceState = {
  workspaces: [],
  status: "idle",
  error: null,
};

export const fetchWorkspaces = createAsyncThunk(
  "workspace/fetchWorkspaces",
  async () => {
    const response = await fetch("/data.json");
    if (!response.ok) throw new Error("Failed to fetch workspaces");
    return (await response.json()) as Workspace[];
  }
);

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaces.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWorkspaces.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workspaces = action.payload;
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default workspaceSlice.reducer;

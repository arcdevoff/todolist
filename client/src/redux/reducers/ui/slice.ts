import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiStateMessage {
  text: string | null;
  status: boolean | null;
}

export interface UiState {
  message: UiStateMessage | null;
}

const initialState: UiState = {
  message: {
    text: null,
    status: null,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<UiStateMessage | null>) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = uiSlice.actions;
export default uiSlice.reducer;

import type { CurrentUser, CurrentUserState } from "@/@types/user";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CurrentUserState = {
  accessToken: "",
  data: null,
  userDataRefresh: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setUserData: (state, action: PayloadAction<CurrentUser | null>) => {
      state.data = action.payload;
    },
    setUserDataRefresh: (state, action: PayloadAction<boolean>) => {
      state.userDataRefresh = action.payload;
    },
  },
});

export const { setAccessToken, setUserData, setUserDataRefresh } = user.actions;
export default user.reducer;

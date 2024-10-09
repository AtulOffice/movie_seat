import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSucess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.loading = null;
      state.error = false;
    },
  },
});

export const { signInStart, signInSucess, signInFailure, logoutSuccess } =
  userSlice.actions;

export default userSlice.reducer;

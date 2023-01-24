import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, logoutThunk, getCurrentUserThunk } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(getCurrentUserThunk.rejected, (state, action) => {
      state.error = action.payload;
    });
  }
});

export default authSlice.reducer;

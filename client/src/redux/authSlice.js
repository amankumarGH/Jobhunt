import { createSlice } from "@reduxjs/toolkit";

const initialAuthUser = localStorage.getItem("authUser")
  ? JSON.parse(localStorage.getItem("authUser"))
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    authUser: initialAuthUser,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setLogout: (state) => {
      state.authUser = null;
      // localStorage.removeItem("authUser");
    },
  },
});

export const { setLoading, setAuthUser, setLogout } = authSlice.actions;

export default authSlice.reducer;

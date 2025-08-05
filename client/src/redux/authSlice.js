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
    
  },
});

export const { setLoading, setAuthUser } = authSlice.actions;

export default authSlice.reducer;

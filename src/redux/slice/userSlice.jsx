import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_SERVICE } from "../../service/localService";

const initialState = {
  isLogin: false,
  user: LOCAL_SERVICE.user.get(),
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const { actions, reducer } = userSlice;
export const { setUserInfo } = actions;

export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleMenu } = userSlice.actions;
export default userSlice.reducer;

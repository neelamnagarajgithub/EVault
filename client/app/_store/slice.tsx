import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  showContactForm: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    toggleContactForm: (state) => {
      state.showContactForm = !state.showContactForm;
    },
  },
});

export const { toggleMenu, toggleContactForm } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  showContactForm: false,
  showTypeOFView: false,
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
    toggleTypeOfView: (state) => {
      state.showTypeOFView = !state.showTypeOFView;
    },
  },
});

export const { toggleMenu, toggleContactForm, toggleTypeOfView } =
  userSlice.actions;
export default userSlice.reducer;

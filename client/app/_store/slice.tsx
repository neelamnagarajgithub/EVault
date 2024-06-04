import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  showContactForm: false,
  showTypeOFView: false,
  file: File,
  fileUrl: "",
  uploaded: false,
  uploadLoading: false,
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
    setFile: (state, action) => {
      console.log(action.payload);
      state.file = action.payload;
    },
    setFileUrl: (state, action) => {
      state.fileUrl = action.payload;
    },
    setUploaded: (state) => {
      state.uploaded = !state.uploaded;
    },
    setUploadLoading: (state) => {
      state.uploadLoading = !state.uploadLoading;
    },
  },
});

export const {
  toggleMenu,
  toggleContactForm,
  toggleTypeOfView,
  setFile,
  setFileUrl,
  setUploaded,
  setUploadLoading,
} = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"

const initModal = {
  isShowModal: true,
  modalData: null,
}

const modalSlice = createSlice({
  name: 'Modal Slice',
  initialState: initModal,
  reducers: {
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal
    },
    modalDataUpdate: (state, action) => {
      state.modalData = action.payload;
    }
  }
})

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
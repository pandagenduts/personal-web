import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modal'

const store = configureStore({
  reducer: {
    theModal: modalReducer,
  }
})

export default store;
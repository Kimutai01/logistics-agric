import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
    // Add your reducers here
  },
});

export default store;

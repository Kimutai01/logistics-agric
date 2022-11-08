import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetch("/api/v1/books");
  const data = await response.json();
  return data;
});

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
  },
});

export default bookSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../types";

type BooksState = {
    books: IBook[],
}
const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks } = booksSlice.actions;


export default booksSlice.reducer;

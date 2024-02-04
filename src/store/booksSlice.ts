import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../types";

type BooksState = {
  books: IBook[];
};
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
    toggleLike: (state, action: PayloadAction<number>) => {
      state.books = state.books.map((book) =>
        book.id === action.payload ? { ...book, isLiked: !book.isLiked } : book
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks, toggleLike } = booksSlice.actions;

export default booksSlice.reducer;

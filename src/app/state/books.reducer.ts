import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { retrieveBookList } from "./books.actions";

export const initialeState: ReadonlyArray<Book> = []

export const booksReducer = createReducer(
    initialeState,
    on(retrieveBookList, (state, { books }) => books)
);
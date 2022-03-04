import { createAction, props } from "@ngrx/store";
import { Book } from "./book-list/books.model";

/**
 * Add Book
 */
export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId: string }>()
);

/**
 * Remove Book
 */
export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{ bookId: string }>()
);

/**
 * Retreive Books
 */
export const retrieveBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{books : ReadonlyArray<Book>}>()
);
import { createReducer, on } from "@ngrx/store"
import { addBook, removeBook } from "./books.actions";

/**
 * Store Ids of book
 */
export const initialeState : ReadonlyArray<string> = []

export const collectionReducer = createReducer(
    initialeState,
    on(removeBook, (state, {bookId}) => state.filter((id) => id !== bookId)), // update current state after removing a book
    on(addBook, (state, {bookId}) => {
        if(state.indexOf(bookId) > -1) return state;

        return [...state, bookId]
    })
);
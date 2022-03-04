import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../book-list/books.model";

/**
 * the selectBookCollection selector combines two other selectors in order to build its return value.
 */
export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
        return books.filter(book => collection.indexOf(book.id) > -1);
    }
);

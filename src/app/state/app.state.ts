/**
 * Define the state as a list of books and a list of collection books' IDs.
 */

import { Book } from "../book-list/books.model";

export interface AppState {
    books: Readonly<Book>;
    collection: Readonly<string>;
}
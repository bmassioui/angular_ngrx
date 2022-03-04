import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { addBook, removeBook, retrieveBookList } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Ngrx';
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: GoogleBooksService, private store: Store) { }

  /**
   * Add Book
   * @param bookId 
   */
  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  /**
   * Remove Book
   * @param bookId 
   */
  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  ngOnInit(): void {
    this.booksService.getBooks()
      .subscribe((books) => this.store.dispatch(retrieveBookList({ books })));
  }
}

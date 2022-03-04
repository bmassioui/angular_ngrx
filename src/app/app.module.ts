import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/_components/book-list/book-list.component';
import { BookCollectionComponent } from './book-list/_components/book-collection/book-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({books : booksReducer, collection : collectionReducer}) // The StoreModule.forRoot() method registers the global providers needed to access the Store throughout your application.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

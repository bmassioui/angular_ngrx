import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

@NgModule({
  declarations: [
    AppComponent
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

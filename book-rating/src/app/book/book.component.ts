import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from './../shared/book-rating.service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();

  constructor(public rs: BookRatingService) { }

  rateUp() {
    const ratedBook = this.rs.rateUp(this.book);
    this.rate.emit(ratedBook);
  }

  rateDown() {
    const ratedBook = this.rs.rateDown(this.book);
    this.rate.emit(ratedBook);
  }
}

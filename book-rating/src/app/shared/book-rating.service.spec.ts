import { TestBed, inject } from '@angular/core/testing';
import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {

  let rs: BookRatingService;
  let book;

  beforeEach(() => {
    rs = new BookRatingService();
    book = {
      isbn: '00',
      title: 'Book',
      description: 'ABC',
      rating: 3
    };
  });

  it('should always return a new book', () => {
    const ratedBook = rs.rateUp(book); // imutability
    expect(ratedBook).not.toBe(book);
  });

  it('should rate up a book by one', () => {
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book by one', () => {
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 1', () => {
    book.rating = 1;
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './data/book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  // add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been added successfully';
  }

  // update book
  updateBookService(book: Book): string {
    // eslint-disable-next-line prefer-const
    let index = this.books.findIndex((currBook) => {
      return currBook.id == book.id;
    });
    this.books[index] = book;
    return 'Book has been updated successfully';
  }

  // delete book
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id != bookId;
    });
    return 'Book has been deleted successfully';
  }

  // find all books
  findAllBooksService(): Book[] {
    return this.books;
  }
}

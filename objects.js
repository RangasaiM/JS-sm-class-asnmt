// Book factory function to create book objects
function createBook(title, author, ISBN) {
  return {
    title,
    author,
    ISBN,
    isBorrowed: false,

    borrow() {
      if (!this.isBorrowed) {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
      } else {
        console.log(`${this.title} is already borrowed.`);
      }
    },

    returnBook() {
      if (this.isBorrowed) {
        this.isBorrowed = false;
        console.log(`${this.title} has been returned.`);
      } else {
        console.log(`${this.title} was not borrowed.`);
      }
    }
  };
}

// Library object
const Library = {
  books: [],

  addBook(book) {
    this.books.push(book);
    console.log(`Book titled "${book.title}" added to the library.`);
  },

  findBookByISBN(isbn) {
    return this.books.find(book => book.ISBN === isbn);
  },

  listAvailableBooks() {
    return this.books.filter(book => !book.isBorrowed);
  },

  listBorrowedBooks() {
    return this.books.filter(book => book.isBorrowed);
  }
};

/**************************************************************
 * getBookById(bookId, books):
 * - receives a bookId
 * - recieves an array of book objects
 * - returns the book object that matches that id
 * - returns undefined if no matching book is found
 ****************************************************************/
function getBookById(bookId, books) {
  // Your code goes here

  // call function -->           console.log(getBookById(12, books));

  // book.id --> from books.id

  return books.find(book => book.id === bookId);
}

// the result only --> id: 12

/***********************************************************************************************************************************
 * getAuthorByName(authorName, authors):
 * - receives an authorName
 * - recieves an array of author objects
 * - returns the author that matches that name (CASE INSENSITIVE)
 * - returns undefined if no matching author is found
 ****************************************************************/
function getAuthorByName(authorName, authors) {
  // Your code goes here

  //  console.log(getAuthorByName("J.K. Rowling", authors));

  return authors.find(
    author => author.name.toLowerCase() === authorName.toLowerCase()
  );
}

// the result only --> name "j.k. rowling "

/**************************************************************************************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  // Your code goes here

  // console.log(bookCountsByAuthor(authors));

  return authors.map(author => {
    return {
      author: author.name,
      bookCount: author.books.length
    };
  });
}

// the result only -->  { author: '  '   ,  bookCount : },

/*****************************************************************************************************************************************
 * booksByColor(books):
 * - receives an array of books
 * - returns an object where the keys are colors
 *   and the values are arrays of book titles:
 *    { <COLOR>: [<BOOK_TITLES>] }
 ****************************************************************/
function booksByColor(books) {
  const colors = {};

  // Your code goes here
  // every color name same , so to print color name (print only title)

  // console.log(booksByColor(books));

  books.forEach(book => {
    if (!colors[book.color]) {
      colors[book.color] = [book.title];
    } else {
      colors[book.color].push(book.title);
    }
  });

  return colors;
}

// the result only --> example  {
//                                white : [ ' title  ' , ' ', ],                      }

/*********************************************************************************************************************************
 * titlesByAuthorName(authorName, authors, books):
 * - receives an authorName
 * - recieves an array of author objects
 * - recieves an array of book objects
 * - returns an array of the titles of the books written by that author:
 *    ["The Hitchhikers Guide", "The Meaning of Liff"]
 ****************************************************************/
function titlesByAuthorName(authorName, authors, books) {
  // Your code goes here

  // authors.id = book.id --> so, print book.title
  // console.log(titlesByAuthorName("George R.R. Martin", authors, books));

  const author = getAuthorByName(authorName, authors);

  if (!author) {
    return [];
  }
  return author.books.map(bookId => getBookById(bookId, books).title);
}

// the result only --> print only title.books [' ', ' ' , ' ',  ]

/*********************************************************************************************************************************
 * mostProlificAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author with the most books
 *
 * Note: assume there will never be a tie
 ****************************************************************/
function mostProlificAuthor(authors) {
  // Your code goes here

  // check who's author to have the most books & to print only the name of author

  // console.log(mostProlificAuthor(authors));

  let prolific = authors[0];

  authors.forEach(author => {
    if (author.books.length > prolific.books.length) prolific = author;
  });

  return prolific.name;
}

// the result only --> Terry Pratchett

/************************************************************************************************************************************
 * relatedBooks(bookId, authors, books):
 * - receives a bookId
 * - receives a list of authors
 * - receives a list of books
 * - returns a list of the titles of all the books by
 *   the same author as the book with bookId
 *   (including the original book)
 *
 * e.g. Let's send in bookId 37 ("The Shining Girls" by Lauren Beukes):
 *      relatedBooks(37);
 * We should get back all of Lauren Beukes's books:
 *      ["The Shining Girls", "Zoo City"]
 *
 * NOTE: YOU NEED TO TAKE INTO ACCOUNT BOOKS WITH MULTIPLE AUTHORS
 *
 * e.g. Let's send in bookId 46 ("Good Omens" by Terry Pratchett and Neil Gaiman):
 *      relatedBooks(46);
 * We should get back all of Neil Gaiman's books AND all of Terry Pratchett's books:
 *      ["Good Omens", "Good Omens", "Neverwhere", "Coraline", "The Color of Magic", "The Hogfather", "Wee Free Men", "The Long Earth", "The Long War", "The Long Mars"]
 *
 * BONUS: REMOVE DUPLICATE BOOKS
 ****************************************************************/
function relatedBooks(bookId, authors, books) {
  // Your code goes here
}

/*****************************************************************************************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  // Your code goes here
}

// *************************************** call function *************************************************************************

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor
};

/**
 * Uncomment the following lines if you
 * want to manually test your code
 */

const authors = require("./authors.json");
const books = require("./books.json");

// console.log(getBookById(12, books));

// console.log(getAuthorByName("J.K. Rowling", authors));

// console.log(bookCountsByAuthor(authors));

// console.log(booksByColor(books));

// console.log(titlesByAuthorName("George R.R. Martin", authors, books));

console.log(mostProlificAuthor(authors));

// console.log(relatedBooks(50, authors, books));
// console.log(friendliestAuthor(authors));

const Book = require('./book-model');
const Genre = require('./genre-model');

const main = async () =>{
  const genres = await Genre.list();
  console.log(genres)
  // CREATE -> INSERT
  // const newBook = await Book.create('Kujo', 300);
  // console.log('newBook:', newBook);

  // // READ -> SELECT (all)
  // const books = await Book.list();
  // console.log('books:', books);

  // // READ -> SELECT (one)
  // const book = await Book.find(newBook.book_id)
  // console.log('book:', book);

  // // UPDATE -> UPDATE
  // const updatedBook = await Book.updatePages(book.book_id, 1000)
  // console.log('updatedBook:', updatedBook);

  // // DELETE -> DELETE (one)
  // const didDelete = await Book.delete(updatedBook.book_id)
  // console.log('didDelete:', didDelete);

  // // DELETE -> DELETE (all)
  // const didMassDelete = await Book.deleteAll();
  // console.log('didMassDelete:', didMassDelete);


  // // Relationships
  // // CREATE a new relationship
  // const newerBook = await Book.create('Dune', 4000);
  // await Book.addGenre(1, newerBook.book_id);
  // console.log('newerBook.book_id:', newerBook.book_id);
  // const bookWithGenres = await Book.bookWithGenres(newerBook.book_id);
  // console.log('bookWithGenres:', bookWithGenres);
}

main();
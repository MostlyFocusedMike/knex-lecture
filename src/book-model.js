const knex = require('./knex');

class Book {
  static async list() {
    try {
      const query = `SELECT * FROM books;`;
      const { rows } = await knex.raw(query);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(title, pages) {
    try {
      const query = `INSERT INTO books (title, pages)
      values (?, ?)
      returning *`;
      const { rows: [newBook] } = await knex.raw(query, [title, pages]);
      return newBook;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = `SELECT * FROM books WHERE book_id = ?`;
      const { rows: [book] } = await knex.raw(query, [id]);
      return book;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async updatePages(id, pages) {
    try {
      const query = `UPDATE books SET pages = ? WHERE book_id = ? RETURNING *`
      const { rows: [book] } = await knex.raw(query, [pages, id]);
      return book;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(id) {
    try {
      const query = `DELETE FROM books WHERE book_id = ?`;
      const { rowCount } = await knex.raw(query, [id]);
      return !!rowCount;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      const query = `DELETE FROM genre_books`;
      const { rowCount } = await knex.raw(query);
      return !!rowCount;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async addGenre(genreId, bookId) {
    try {
      const query = `INSERT INTO genre_books (genre_id, book_id) VALUES (?, ?)`;
      const { rowCount } = await knex.raw(query, [genreId, bookId]);
      return !!rowCount;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async bookWithGenres(bookId) {
    try {
      const query = `
        SELECT * FROM books
        JOIN genre_books
        ON books.book_id = genre_books.book_id
        JOIN genres
        ON genre_books.genre_id = genres.genre_id
        WHERE books.book_id = ?
      `;
      const { rows } = await knex.raw(query, [bookId]);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Book;

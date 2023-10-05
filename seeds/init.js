/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const Book = require('../src/models/book')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genre_books').del()
  await knex('books').del()
  await knex('genres').del()

  Book.create('Dune', 40000);
  Book.crea
};

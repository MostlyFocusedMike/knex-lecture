const knex = require('./knex');

class Genre {
  static async list() {
    try {
      const query = `SELECT * FROM genres;`;
      const { rows } = await knex.raw(query);
      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create() {
    try {
      const query = ``;
      const { rows: [genre] } = await knex.raw(query, []);
      return genre || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find() {
    try {
      const query = ``;
      const { rows: [genre] } = await knex.raw(query, [id]);
      return genre || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async update() {
    try {
      const query = ``
      const { rows: [genre] } = await knex.raw(query);
      return genre || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete() {
    try {
      const query = ``;
      const { rowCount } = await knex.raw(query, []);
      return !!rowCount;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      const query = ``;
      const { rowCount } = await knex.raw(query);
      return !!rowCount;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Genre;
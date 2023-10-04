const knex = require('./knex');

class ToDo {
  static async create(title) {
    try {
      const query = `INSERT INTO to_dos (title)
      values (?)
      returning *`;
      const { rows: [newToDo] } = await knex.raw(query, [title]);
      return newToDo;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = ToDo;

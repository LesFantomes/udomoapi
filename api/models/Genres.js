/**
 * Genres.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'genres', primaryKey: 'idGenre',
  attributes: {
    idGenre: {
      type: 'int',
      unique: true,
      required: true,
      columnName: 'idGenre'
    },
    name: {
      type: 'string',
      columnName: "name",
    }
  },

};


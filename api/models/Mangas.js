/**
 * Mangas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'mangas', primaryKey: 'id',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true,
      columnName: 'idManga'
    },
    title: {
      type: 'string',
      columnName: 'title',
    },
  },

};


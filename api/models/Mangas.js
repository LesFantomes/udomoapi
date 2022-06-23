/**
 * Mangas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'mangas', primaryKey: 'idManga',
  attributes: {
    idManga: {
      type: 'int',
      unique: true,
      required: true,
      columnName: 'idManga'
    },
    title: {
      type: 'string',
      columnName: 'title',
    },
    author: {
      type: 'string',
      columnName: 'author',
    },
    editor: {
      type: 'string',
      columnName: 'editor',
    },
  },

};


/**
 * Bookstores.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'bookstores', primaryKey: 'idBookstore',
  attributes: {
    idBookstore: {
      type: 'int',
      unique: true,
      required: true,
      columnName: 'idBookstore'
    },
    name: {
      type: 'string',
      columnName: 'name',
    },
    address: {
      type: 'string',
      columnName: 'address',
    },
    city: {
      type: 'string',
      columnName: 'city',
    },
    zip: {
      type: 'string',
      columnName: 'zip',
    },
    schedule: {
      type: 'string',
      columnName: 'schedule',
    },
  },

};


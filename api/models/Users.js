/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Bookstores = require("./Bookstores");

module.exports = {
  tableName: 'users', primaryKey: 'idUser',
  attributes: {
    idUser:{
      type: 'int',
      unique: true,
      required: true,
      columnName: 'idUser'
    },    
    firstname: {
      type: 'string',
      columnName: 'firstname',
    },
    lastname: {
      type: 'string',
      columnName: 'lastname',
    },
    email: {
      type: 'string',
      columnName: 'email',
    },
    password: {
      type: 'string',
      columnName: 'password',
    },
    isLibrarian: {
      type: 'string',
      columnName: 'isLibrarian',
    },
    isAdmin: {
      type: 'string',
      columnName: 'isAdmin',
    },
    idBookstore: {
      model: Bookstores,
      columnName: 'idBookstore'
    }
  }
};


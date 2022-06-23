/**
 * Copies.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Bookstores = require("./Bookstores");
const Mangas = require("./Mangas");
const Orders = require("./Orders");

module.exports = {
  tableName: 'copies', primaryKey: 'idCopy',
  attributes: {
    idCopy:{
      type: 'int',
      unique: true,
      required: true,
      columnName: 'idCopy'
    },
    idBookstore: {
      model: Bookstores,
      columnName: 'idBookstore',
    },
    idManga: {
      model: Mangas,
      columnName: 'idManga',
    },
    idOrder: {
      model: Orders,
      columnName: 'idOrder',
    },
    price: {
      type:'double precision',
      columnName: 'price',
    }

  }
};


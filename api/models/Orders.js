/**
 * Orders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Users = require("./Users");

module.exports = {
  tableName: 'orders', primaryKey: 'idOrder',
  attributes: {
    idOrder:{
      type: 'int',
      unique: true,
      required: true,
      columnName: 'idOrder'
    },
    idUser:{
      model: Users,
      columnName: 'idUser'
    },
    status:{
      type: 'string',
      columnName: 'status'
    }
  },

};


/**
 * MangaGenre.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Genres = require("./Genres");
const Mangas = require("./Mangas");

module.exports = {
  tableName: 'manga_genre', primaryKey: 'idMangaGenre',

  attributes: {
    idMangaGenre:{
      columnName: 'idMangaGenre',
      type: 'int',
    },
    idManga: {
      model: Mangas,
      columnName: 'idManga',
    },
    idGenre : {
      model: Genres,
      columnName: 'idGenre',
    }
  },

};


/**
 * MangasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const {v4: uuidv4} = require('uuid');

module.exports = {
  getManga: async (req, res) => {
    try {
      const mangas = await Mangas.find().select(['idManga', 'title', 'author', 'editor']);
      return res.json(mangas);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  getOneManga: async (req, res) => {
    try {
      const manga = await Mangas.find({idManga: req.params.idManga});
      return res.json(manga);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  createManga: async (req, res) => {
    try {
      const manga = await Mangas.create({
        idManga: req.body.idManga,
        title: req.body.title,
        author: req.body.author,
        editor: req.body.editor,
      }).fetch();
      return res.status(201).json(manga);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  modifyManga: async (req, res) => {
    try {
      const manga = await Mangas.update({
        idManga: req.params.idManga,
      }).set({
        title: req.body.title,
        author: req.body.author,
        editor: req.body.editor,
      });
      return res.json(manga);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  deleteManga: async (req, res) => {
    try {
      const manga = await Mangas.destroy({
        idManga: req.params.idManga,
      });
      return res.json(manga);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};


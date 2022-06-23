/**
 * MangaGenreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getMangaGenre: async (req, res) => {
        try {
          const mangaGenres = await MangaGenre.find().select(['idMangaGenre', 'idManga', 'idGenre']);
          return res.json(mangaGenres);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      getOneMangaGenre: async (req, res) => {
        try {
          const mangaGenres = await MangaGenre.find({idMangaGenre: req.params.idMangaGenre});
          return res.json(mangaGenres);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      createMangaGenre: async (req, res) => {
        try {
          const mangaGenre = await MangaGenre.create({
            idMangaGenre: req.body.idMangaGenre,
            idManga: req.body.idManga,
            idGenre: req.body.idGenre,
            editor: req.body.editor,
          }).fetch();
          return res.status(201).json(mangaGenre);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      modifyMangaGenre: async (req, res) => {
        try {
          const mangaGenre = await MangaGenre.update({
            idMangaGenre: req.params.idMangaGenre,
          }).set({
            title: req.body.title,
            author: req.body.author,
            editor: req.body.editor,
          });
          return res.json(mangaGenre);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      deleteMangaGenre: async (req, res) => {
        try {
          const mangaGenre = await MangaGenre.destroy({
            idMangaGenre: req.params.idMangaGenre,
          });
          return res.json(mangaGenre);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      }

};


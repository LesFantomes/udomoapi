/**
 * GenresController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getGenre: async (req, res) => {
        try {
          const genres = await Genre.find().select(['idGenre', 'name']);
          return res.json(genres);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      getOneGenre: async (req, res) => {
        try {
          const Genres = await Genre.find({idGenre: req.params.idGenre});
          return res.json(genres);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      createGenre: async (req, res) => {
        try {
          const genre = await Genre.create({
            idGenre: req.body.idGenre,
            name: req.body.name,
          }).fetch();
          return res.status(201).json(genre);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      modifyGenre: async (req, res) => {
        try {
          const genre = await Genre.update({
            idGenre: req.params.idGenre,
          }).set({
            name: req.body.name,
          });
          return res.json(genre);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      deleteGenre: async (req, res) => {
        try {
          const genre = await Genre.destroy({
            idGenre: req.params.idGenre,
          });
          return res.json(genre);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      }

};


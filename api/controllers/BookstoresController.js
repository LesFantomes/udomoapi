/**
 * BookstoresController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getBookstore: async (req, res) => {
        try {
          const bookstores = await Bookstore.find().select(['idBookstore', 'idUser', 'status']);
          return res.json(bookstores);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      getOneBookstore: async (req, res) => {
        try {
          const bookstores = await Bookstore.find({idBookstore: req.params.idBookstore});
          return res.json(bookstores);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      createBookstore: async (req, res) => {
        try {
          const bookstore = await Bookstore.create({
            idBookstore: req.body.idBookstore,
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            zip: req.body.zip,
            schedule: req.body.schedule,
          }).fetch();
          return res.status(201).json(bookstore);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      modifyBookstore: async (req, res) => {
        try {
          const bookstore = await Bookstore.update({
            idBookstore: req.params.idBookstore,
          }).set({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            zip: req.body.zip,
            schedule: req.body.schedule,
          });
          return res.json(bookstore);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      deleteBookstore: async (req, res) => {
        try {
          const bookstore = await Bookstore.destroy({
            idBookstore: req.params.idBookstore,
          });
          return res.json(bookstore);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      }

};


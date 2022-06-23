/**
 * CopiesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getCopies: async (req, res) => {
        try {
          const copies = await Copies.find().select(['idCopy', 'idBookstore', 'idManga', 'idOrder', 'price']);
          return res.json(copies);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      getOneCopies: async (req, res) => {
        try {
          const copies = await Copies.find({idCopy: req.params.idCopy});
          return res.json(copies);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      createCopies: async (req, res) => {
        try {
          const copies = await Copies.create({
            idCopy: req.body.idCopy,
            idBookstore: req.body.idBookstore,
            idManga: req.body.idManga,
            idOrder: req.body.idOrder,
            price: req.body.price,
          }).fetch();
          return res.status(201).json(copies);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      modifyCopies: async (req, res) => {
        try {
          const copies = await Copies.update({
            idCopy: req.params.idCopy,
          }).set({
            idBookstore: req.body.idBookstore,
            idManga: req.body.idManga,
            idOrder: req.body.idOrder,
            price: req.body.price,
          });
          return res.json(copies);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },
    
      deleteCopies: async (req, res) => {
        try {
          const copies = await Copies.destroy({
            idCopy: req.params.idCopy,
          });
          return res.json(copies);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      }


};


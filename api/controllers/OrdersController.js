/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getOrder: async (req, res) => {
        try {
          const orders = await Orders.find().select(['idOrder', 'idUser', 'status']);
          return res.json(orders);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },

      getOneOrder: async (req, res) => {
        try {
          const orders = await Orders.find({idOrder: req.params.idOrder});
          return res.json(orders);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },

      createOrder: async (req, res) => {
        try {
          const order = await Orders.create({
            idOrder: req.body.idOrder,
            idUser: req.body.idUser,
            status: req.body.status,
          }).fetch();
          return res.status(201).json(order);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },

      modifyOrder: async (req, res) => {
        try {
          const order = await Orders.update({
            idOrder: req.params.idOrder,
          }).set({
            idUser: req.body.idUser,
            status: req.body.status,
          });
          return res.json(order);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      },

      deleteOrder: async (req, res) => {
        try {
          const order = await Orders.destroy({
            idOrder: req.params.idOrder,
          });
          return res.json(order);
        } catch (e) {
          console.error(e);
          return res.serverError(e);
        }
      }

};


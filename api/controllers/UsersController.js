/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getUser: async (req, res) => {
    try {
      const users = await Users.find().select(['idUser', 'firstname', 'lastname', 'email', 'password', 'isLibrarian', 'isAdmin', 'idBookstore']);
      return res.json(users);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  getOneUser: async (req, res) => {
    try {
      const users = await Users.find({ idUser: req.params.idUser });
      return res.json(users);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  createUser: async (req, res) => {
    try {
      const user = await Users.create({
        idUser: req.body.idUser,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        isLibrarian: req.body.isLibrarian,
        isAdmin: req.body.isAdmin,
        idBookstore: req.body.idBookstore,
      }).fetch();
      return res.status(201).json(user);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  modifyUser: async (req, res) => {
    try {
      const user = await Users.update({
        idUser: req.params.idUser,
      }).set({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        isLibrarian: req.body.isLibrarian,
        isAdmin: req.body.isAdmin,
        idBookstore: req.body.idBookstore,
      });
      return res.json(user);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await Users.destroy({
        idUser: req.params.idUser,
      });
      return res.json(user);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }

};


/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  all: async function (req, res) {
    try {
      // Lógica para recuperar los usuarios
      const users = await Users.find();
      res.status(200).send({ users });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Ocurrió un error interno." });
    }
  },
};

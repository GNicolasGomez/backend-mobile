/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
  login: async function (req, res) {
    if (!req.param("email") || !req.param("password")) {
      return res.serverError("Todos los campos son obligatorios .");
    }

    const email = req.param("email");
    const password = req.param("password");

    let user = await Users.findOne({ email });

    if (!user) {
      return res.status(403).send("Usuario no encontrado");
    }

    if (user.isDeleted) {
      return res.status(403).send("Usuario inactivo");
    }

    // Verificar contraseña
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(403).send("Contraseña incorrecta");
    }

    // Crear el objeto con los datos necesarios para el token
    const userPayload = {
      id: user.id,
      email: user.email,
    };

    // Generar el token JWT
    user.token = jwt.sign(userPayload, "secret key", {
      expiresIn: "1d",
    });

    res.send(user);
  },

  create: async function (req, res) {
    try {
      const user = req.body;

      // Verificar que sea un usuario de email correcto
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        return res
          .status(400)
          .send({ error: "Formato de correo electrónico no válido." });
      }

      // Verificar que no exista un usuario con el mismo email
      const isExistUser = await Users.findOne({ email: user.email });
      if (isExistUser) {
        return res.send({ error: "Usuario existente." });
      }

      // Verificar que el password
      if (user.password.length < 6) {
        return res.status(400).send({ error: "Contraseña muy corta." });
      }

      const newUser = await Users.create({
        idOffice: user.idOffice,
        name: user.name,
        lastName: user.lastName,
        dni: user.dni,
        email: user.email,
        password: await bcrypt.hash(user.password, 10),
        role: user.role,
        phone: user.phone,
        token: jwt.sign(
          {
            id: user.id,
            email: user.email,
            role: user.role,
          },
          "secret key",
          {
            expiresIn: "7d",
          }
        ),
      }).fetch();
      res.status(201).send({ newUser });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error });
    }
  },
};

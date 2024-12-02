module.exports = {
  all: async function (req, res) {
    try {
      // Lógica para recuperar los usuarios
      const careers = await Career.find();
      res.status(200).send({ careers });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Ocurrió un error interno." });
    }
  },
  create: async function (req, res) {
    try {
      const { idOffice, name, type, duration, obs } = req.body;

      const newCareer = await Career.create({
        idOffice: idOffice,
        name: name,
        type: type,
        duration: duration,
        obs: obs,
      }).fetch();

      res.status(200).send({ newCareer });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Ocurrió un error interno." });
    }
  },
};

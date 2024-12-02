module.exports = {
  all: async function (req, res) {
    try {
      // Lógica para recuperar los usuarios
      const offices = await Office.find();
      res.status(200).send({ offices });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Ocurrió un error interno." });
    }
  },
  create: async function (req, res) {
    try {
      const { name, address, phone, token } = req.body;

      const newOffice = await Office.create({
        name: name,
        address: address,
        phone: phone,
        token: token,
      }).fetch();

      res.status(200).send({ newOffice });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Ocurrió un error interno." });
    }
  },
};

module.exports = {
  all: async function (req, res) {
    try {
      // Lógica para recuperar los usuarios

      console.log("Holaaaa")

      const companies = await Companies.find();
      res.status(200).send({ companies });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Ocurrió un error interno." });
    }
  },
  create: async function (req, res) {
    try {
      const { name, address, phone, token } = req.body;
      const newCompany = await Companies.create({
        name: name,
        address: address,
        phone: phone,
        token: token,
      }).fetch();

      res.status(200).send({ newCompany });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Ocurrió un error interno." });
    }
  },
};

"use strict";

module.exports = {
  attributes: {
    idCareer: {
      model: "Career",
    },
    idTeacher: {
      model: "Teacher",
    },
    year: {
      type: "string",
    },
    inscription: {
      type: "string",
      required: true,
    },
    price: {
      type: "string",
      required: true,
    },
    obs: { type: "string", allowNull: true },
  },
};

"use strict";

module.exports = {
  attributes: {
    idCareer: {
      model: "Career",
    },
    name: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    dni: {
      type: "string",
    },
    email: { type: "string", isEmail: true, unique: true },
    sex: {
      type: "string",
    },
    enrollment: {
      type: "string",
    },
    phone: {
      type: "string",
    },
    status: {
      type: "string",
      defaultsTo: "active",
      isIn: ["active", "inactive"],
    },
    obs: { type: "string", allowNull: true },
  },
};

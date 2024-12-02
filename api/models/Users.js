"use strict";

module.exports = {
  attributes: {
    idOffice: {
      model: "Office",
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
    password: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      defaultsTo: "user",
      isIn: ["user", "admin", "super"],
    },
    phone: {
      type: "string",
      required: true,
    },
    status: {
      type: "string",
      defaultsTo: "active",
      isIn: ["active", "inactive"],
    },
    token: { type: "string", allowNull: true },
  },
};

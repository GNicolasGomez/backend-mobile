"use strict";

module.exports = {
  attributes: {
    company: {
      model: "Companies",
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
      defaultsTo: "authenticated",
      isIn: ["authenticated", "unauthenticated", "checking"],
    },
    isActive: {
      type: "boolean",
    },
    token: { type: "string", allowNull: true },
  },
};

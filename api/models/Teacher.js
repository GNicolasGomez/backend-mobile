"use strict";

module.exports = {
  attributes: {
    name: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    sex: {
      type: "string",
    },
    email: { type: "string", isEmail: true, unique: true },
    phone: {
      type: "string",
      required: true,
    },
    status: {
      type: "string",
      defaultsTo: "active",
      isIn: ["active", "inactive"],
    },
    obs: { type: "string" },
  },
};

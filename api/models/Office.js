"use strict";

module.exports = {
  attributes: {
    name: {
      type: "string",
    },
    address: {
      type: "string",
    },
    phone: {
      type: "string",
      required: true,
    },
    token: { type: "string", allowNull: true },
  },
};

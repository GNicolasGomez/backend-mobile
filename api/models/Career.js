"use strict";

module.exports = {
  attributes: {
    idOffice: {
      model: "Office",
    },
    name: {
      type: "string",
    },
    type: {
      type: "string",
      required: true,
    },
    duration: {
      type: "string",
    },
    obs: { type: "string", allowNull: true },
  },
};

/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  "GET /": "UserController.all",
  "GET /welcome/:unused?": { action: "dashboard/view-welcome" },

  "GET /faq": { action: "view-faq" },
  "GET /legal/terms": { action: "legal/view-terms" },
  "GET /legal/privacy": { action: "legal/view-privacy" },
  "GET /contact": { action: "view-contact" },

  "GET /signup": "entrance/view-signup.all",
  "GET /email/confirm": { action: "entrance/confirm-email" },
  "GET /email/confirmed": { action: "entrance/view-confirmed-email" },

  // "GET /login": "users/UserController.all",
  "GET /password/forgot": { action: "entrance/view-forgot-password" },
  "GET /password/new": { action: "entrance/view-new-password" },

  "GET /account": { action: "account/view-account-overview" },
  "GET /account/password": { action: "account/view-edit-password" },
  "GET /account/profile": { action: "account/view-edit-profile" },

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  "/terms": "/legal/terms",
  "/logout": "/api/v1/account/logout",

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  "/api/v1/account/logout": { action: "account/logout" },
  "PUT   /api/v1/account/update-password": {
    action: "account/update-password",
  },
  "PUT   /api/v1/account/update-profile": { action: "account/update-profile" },

  //Login
  "GET   /api/v1/users": "UsersController.all",
  "GET   /api/v1/check-status": "UsersController.checkStatus",
  "POST   /api/v1/users": "UsersController.create",
  "POST   /api/v1/login": "UsersController.login",

  //Login
  "POST   /api/v1/companies": "CompaniesController.create",
  "GET   /api/v1/companies": "CompaniesController.all",


  "POST  /api/v1/observe-my-session": {
    action: "observe-my-session",
    hasSocketFeatures: true,
  },
};

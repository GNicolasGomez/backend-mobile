/**
 * Security Settings
 * (sails.config.security)
 *
 * These settings affect aspects of your app's security, such
 * as how it deals with cross-origin requests (CORS) and which
 * routes require a CSRF token to be included with the request.
 *
 * For an overview of how Sails handles security, see:
 * https://sailsjs.com/documentation/concepts/security
 *
 * For additional options and more information, see:
 * https://sailsjs.com/config/security
 */

module.exports.security = {
  /***************************************************************************
   *                                                                          *
   * CORS is like a more modern version of JSONP-- it allows your application *
   * to circumvent browsers' same-origin policy, so that the responses from   *
   * your Sails app hosted on one domain (e.g. example.com) can be received   *
   * in the client-side JavaScript code from a page you trust hosted on _some *
   * other_ domain (e.g. trustedsite.net).                                    *
   *                                                                          *
   * For additional options and more information, see:                        *
   * https://sailsjs.com/docs/concepts/security/cors                          *
   *                                                                          *
   ***************************************************************************/

  cors: {
    allRoutes: true,
    allowOrigins: [
      "https://devnicolasgomez.com",
      "http://devnicolasgomez.com",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
    ],
    allowCredentials: true,
    allowRequestHeaders: "content-type, authorization",
  },

  /****************************************************************************
   *                                                                           *
   * CSRF protection should be enabled for this application.                   *
   *                                                                           *
   * For more information, see:                                                *
   * https://sailsjs.com/docs/concepts/security/csrf                           *
   *                                                                           *
   ****************************************************************************/

  // csrf: false,
};

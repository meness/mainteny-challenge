const firebaseLoader = require("./firebase");
const expressLoader = require("./express");

/**
 * Initialize things here in separated loaders.
 *
 * @param {any} server
 */
exports.init = (server) => {
  expressLoader(server);
  firebaseLoader();
};

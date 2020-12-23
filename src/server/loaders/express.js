const bodyParser = require("body-parser");

/**
 * Initialize the server.
 *
 * @param {any} server
 */
module.exports = (server) => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
};

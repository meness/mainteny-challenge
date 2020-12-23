const admin = require("firebase-admin");
const serviceAccount = require("../service_account_key.json");

module.exports = () => {
  global.admin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
};

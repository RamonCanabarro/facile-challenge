const sequelize = require("sequelize");
const dbConfig = require("../config/config")

const Encript = require("./encript.model")

const connection = new sequelize(dbConfig)

Encript.init(connection)

try {
  connection.authenticate();
  console.log("Authenticate database Ok !");
} catch(error) {
  console.log(error);
  console.log("Authenticate failed !");
}

module.exports = connection;
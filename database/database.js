const Sequelize = require("sequelize");
const connection = new Sequelize("guiaperguntas", "root", "lira0509", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

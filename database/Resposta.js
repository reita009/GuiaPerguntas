const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
  corpo: {
    type: Sequelize.TEXT,
    allawoNull: false,
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allawoNull: false,
  },
});

Resposta.sync({ force: false });

module.exports = Resposta;

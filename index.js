const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//conexão com banco
const connection = require("./database/database");
const PerguntaModel = require("./database/Pergunta");
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco MYSQL");
  })
  .catch((err) => {
    console.log(`erro ao se conectar:  ${err}`);
  });
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//View Engine
app.set("view engine", "ejs");
app.use(express.static("public"));
//rotas
app.get("/", (req, res) => {
  res.render("index", {});
});
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(`titulo ${titulo}   descrição ${descricao}`);
});

app.listen(8081, () => {
  console.log("conectado com o servidor");
});

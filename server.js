const express = require('express');
const path = require('path');
const json = require('./public/json.js');
const json2 = require('./public/json2.js');
const json3 = require('./public/json3.js');
const server = express();
server.use(express.json());

server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
  res.redirect("index.html");
});

server.get("/fullTrainingSet", json);

server.get("/partialTrainingSet", json2);

server.get("/bigTestingSet", json3);

server.listen(3333, () => {
  console.log("Tá rodando");
});
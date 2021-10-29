const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mysql = require('mysql');

//Paramétrage de la connexion à la BDD
const bdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bonjoure",
    database: 'noel_canadien',
    multipleStatements: true
});


//Connexion à la BDD
bdd.connect(function(err) {
    if (err) throw err;
    console.log("Connecté !");
});


//-----------------------------------------------------

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/cv_web/index.html');
});

app.get('/*', (req, res) => {
  res.status(200).sendFile(__dirname + req.url);
});

module.exports = app;

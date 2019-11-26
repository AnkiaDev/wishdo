var express = require("express");
// Lance le serveur par l'appelle d'express
var app = express();
var url = require("url");
// Module qui permet de créer des templates
var ejs = require("ejs");
// Module pour créer un tableau des queries
var querystring = require("querystring");
// Permet d'agir sur les fichiers systeme
var fs = require("fs");

app.get("/", function(req, res) {
  // Renvoie le template de connexion
  res.render("login.ejs");
});

app.get("/user/{USERNAME}.html", function(req, res) {
  // Renvoie le template une fois connecté
  res.render("logged.ejs");
});

app.get("/user/wishlist.html", function(req, res) {
  // Renvoie le template de sa wishlist
  res.render("wishlist.ejs");
});

app.get("/user/otherwishlist.html", function(req, res) {
  // Renvoie le template de la liste des autres wishlist
  res.render("other-wishlist.ejs");
});

app.listen(8080);
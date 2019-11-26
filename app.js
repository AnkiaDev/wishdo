var express = require("express");
// Lance le serveur par l'appelle d'express
var app = express();
// Module qui permet de créer des templates
var ejs = require("ejs");

app.get("/", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Renvoie le template de connexion
  res.render("login.ejs");
});

app.get("/register", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // JC, notre seigneur qui est aux cieux
  // que ton code soit sanctifié
  // Amen ton code ici

  // Renvoie le template d'inscription
  res.render("register.ejs");
});

app.get("/user/{USERNAME}.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Renvoie le template une fois connecté
  res.render("logged.ejs");
});

app.get("/user/{USERNAME}/wishlist.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Renvoie le template de sa wishlist
  res.render("wishlist.ejs");
});

app.get("/user/{USERNAME}/wishlist/add.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Valérie Giscard, ton d'Estaing est d'écrire ton code ici

  // Renvoie le template de l'ajout d'un élément de sa wishlist
  res.render("wishlist-add.ejs");
});

app.get("/user/{USERNAME}/wishlist/edit.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Luclass la classe, assieds-toi à ton pupitre, sors ton encrier
  // et écrit ton code sur ce morceau de la feuille

  // Bernard, sors de ta coquille et surf sur la toile pour voir
  // le code que tu viens d'écrire

  // Renvoie le template de la modification de sa wishlist
  res.render("wishlist-edit.ejs");
});

app.get("/user/{USERNAME}/otherwishlist.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Renvoie le template de la liste des autres wishlist
  res.render("other-wishlist.ejs");
});

app.get("/user/{USERNAME}/otherwishlist/{OTHERUSERNAME}.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Renvoie le template de la liste d'une autre personne humaine
  res.render("other-wishlist-user.ejs");
});

app.get("/user/{USERNAME}/otherwishlist/{OTHERUSERNAME}/offer.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // ICI C'EST POUR LE BIG BOSS, PAS TOUCHE!

  // Renvoie le template de la modification de sa wishlist
  res.render("other-wishlist-user-offer.ejs");
});

// Si y'a aucune route trouvée => utilise app.use
app.use(function(req, res, next) {
  res.setHeader("Content-Type", "text/html");
  // On revoie le status 404 (erreur 404)
  res.status(404);
  res.render("error404.ejs");
  console.error("Une erreur 404 a été retournée");
});

// Le serveur écoute sur le port => 8080
app.listen(8080);

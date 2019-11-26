// Importation des modules nécessaires à l'application
var express = require("express"); // Express
var fs = require("fs"); // fs

// Déclaration que l'application est une instance de express()
var app = express();

// ------ LES ROUTES --------
// Page par défaut
app.get("/", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Renvoie le template de connexion
  res.render("1.ejs");
});

// Page par défaut
app.get("/connexion.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Code de Valérie
  if (connexion() === true) {
    // Il faut créer la fonction "connexion"
    res.render("2.ejs");
  } else {
    res.render("error.ejs");
  }

  // Renvoie le template de connexion
  res.render("2.ejs");
});

// Page d'inscription
app.get("/register.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Renvoie le template d'inscription
  res.render("10.ejs");
});

// Page de traitement de l'inscription
app.get("/register_go.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Code de Jean-Claude
  /*
  var params = querystring.parse(url.parse(req.url).query);

  var json_users = fs.readFileSync("./data/json_users.json");

// je vérifie que les information sont existantes
  if ('prenom' in params && 'password' in params) {

       // Si le nom existe je stop et j'envois vers un page récupération de login
      if ( params['nom'] === json_users[util][nom] ) {
          console.log(params['nom']);
          console.log(json_users[util][nom]);
          res.send("cet utilisateur existe déjà , voullez vous récuperer votre mot de pass ?");
      } else {
          // si le nom n'existe pas j'ajoute le wisher a la liste
          // je crée l'objer user
          var user = {
              "prenom": params['prenom'],
              "password": params['password']
           };
           console.log(user);
           new_json_users = json_users.push(user);
           console.log(new_json_users);   
              // j'ecris le nouveau json_users
          var path = 
              fs.writeFile(path, new_json_users, function(err) {
                  if(err) {
                      res.send("Désolé une erreur est survenue...");
                      console.error(err);
                      throw error;
                  } else {
                      res.render('11.ejs', { utilisateur: req.params.utilisateur });
                  }
              });
      }

  }
  else {
      res.send("Veuillez remplir TOUS les champs");
  }
*/

  //fin code de JC
  // Renvoie le template d'inscription
  res.render("11.ejs");
});

// Menu principal
app.get("/user/:username/menu.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Code de Valérie
  // Qui doit récupérer le nom de l'utilisateur

  // Renvoie le template une fois connecté
  res.render("2.ejs");
});

// Wishlist de l'utilisateur
app.get("/user/:username/wishlist.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Code de Guillaume
  // Récupérer la liste des souhaits sous forme d'un objet JSON
  // dans le dossier data en fonction du nom d'utilisateur.
  // ex : data/guillaume.json

  // Renvoie le template de sa wishlist
  res.render("3.ejs", ma_liste);
});

// Ajout d'un souhait
app.get("/user/:username/add.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Valérie Giscard, ton d'Estaing est d'écrire ton code ici
  // N'est ce pas Lucas ?

  // Renvoie le template de l'ajout d'un élément de sa wishlist
  res.render("4.ejs");
});

// Traitement de l'ajout d'un souhait
app.get("/user/:username/add_go.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // Valérie Giscard, ton d'Estaing est d'écrire ton code ici
  // N'est ce pas Lucas ?

  // Renvoie le template de l'ajout d'un élément de sa wishlist
  res.render("3.ejs");
});

// Modification d'un souhait
app.get("/user/:username/edit.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Renvoie le template de la modification de sa wishlist
  res.render("6.ejs");
});

// Traitement de la modification d'un souhait
app.get("/user/:username/edit_go.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Code de traitement de Valérie

  // Renvoie le template de la modification de sa wishlist
  res.render("3.ejs");
});

// Liste des autres
app.get("/user/:username/others.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Code de Jean-Claude

  // Renvoie le template de la liste des autres wishlist
  res.render("7.ejs");
});

// Liste des souhaits d'un autre utilisateur
app.get("/user/:username/others/:othername.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");

  // Code de Guillaume

  // Renvoie le template de la liste d'une autre personne humaine
  res.render("8.ejs");
});

// Détails d'un souhait
app.get("/user/:username/others/:othername/details.html", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  // ICI C'EST POUR LE BIG BOSS, PAS TOUCHE!

  // Code de Antonin !

  // Renvoie le template de la modification de sa wishlist
  res.render("9.ejs");
});

// 404
app.use(function(req, res, next) {
  res.setHeader("Content-Type", "text/html");
  // On revoie le status 404 (erreur 404)
  res.status(404);
  res.render("5.ejs");
  console.error("Une erreur 404 a été retournée");
});

// Le serveur écoute sur le port => 8080
app.listen(8080);

// THE END !

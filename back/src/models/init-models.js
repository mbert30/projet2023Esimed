var DataTypes = require("sequelize").DataTypes;
var _annonce = require("./annonce");
var _categorie = require("./categorie");
var _comentaireannonce = require("./comentaireannonce");
var _comentaireutilisateur = require("./comentaireutilisateur");
var _typecompte = require("./typecompte");
var _utilisateur = require("./utilisateur");
var _ville = require("./ville");

function initModels(sequelize) {
  var annonce = _annonce(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var comentaireannonce = _comentaireannonce(sequelize, DataTypes);
  var comentaireutilisateur = _comentaireutilisateur(sequelize, DataTypes);
  var typecompte = _typecompte(sequelize, DataTypes);
  var utilisateur = _utilisateur(sequelize, DataTypes);
  var ville = _ville(sequelize, DataTypes);


  return {
    annonce,
    categorie,
    comentaireannonce,
    comentaireutilisateur,
    typecompte,
    utilisateur,
    ville,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const uuid = require('uuid');
const { generateHashedPassword } = require('../security/crypto');
const utilisateur = require('./utilisateur.js');
const annonce = require('./annonce.js');
const categorie = require('./categorie.js');
const comentaireutilisateur = require('./comentaireutilisateur.js');
const comentaireannonce = require('./comentaireannonce.js');
const typecompte = require('./typecompte.js');
const ville = require('./ville.js');

exports.getUsers = async () => await utilisateur.findAll();

exports.getUserForConnection  = async (adresseEmail, Mdp) => {
    return await utilisateur.findOne({ where: { adresseEmail, Mdp } });
};

exports.createUser = async (body) => {
    console.log("user")
    console.log(body)
    await utilisateur.create({
        nom: body.nom,
        prenom: body.prenom,
        adresseEmail: body.email,
        Mdp: body.mdp,
        ID_TypeCompte: "1"
        })
}
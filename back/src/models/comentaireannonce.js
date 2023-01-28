const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./sqlite.db');
const comentaireannonce = sequelize.define('comentaireannonce',
    {
    ID_ComentaireAnnonce: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ID_Annonce: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_Utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    horodatage: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TexteCommentaire: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comentaireannonce',
    timestamps: false,
    indexes: [
      {
        name: "pk_ID_ComentaireAnnonce",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ComentaireAnnonce" },
        ]
      },
      {
        name: "fk_ID_Utilisateur_comentaireannonce",
        using: "BTREE",
        fields: [
          { name: "ID_Utilisateur" },
        ]
      },
      {
        name: "fk_ID_Annonce_comentaireannonce",
        using: "BTREE",
        fields: [
          { name: "ID_Annonce" },
        ]
      },
    ]
});
module.exports = comentaireannonce
const db = require('../database');
const {DataTypes} = require ('sequelize')

const Donos = db.define(
    "Donos",
    {
     id:{ type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{ type: DataTypes.STRING},
    telefone:{ type: DataTypes.STRING},
    createdAt:{ type: DataTypes.DATE},
    updatedAt:{ type: DataTypes.DATE},
    },
    {tableName: "dono"}
    )

module.exports = Donos;
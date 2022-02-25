const db = require('../database');
const {DataTypes} = require ('sequelize')
const Donos = require ('./donos')

const Pets = db.define(
    "Pets",
    {
     id:{ type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{ type: DataTypes.STRING},
    idade:{ type: DataTypes.INTEGER},
    especie:{ type: DataTypes.STRING},
    raca:{ type: DataTypes.STRING},
    createdAt:{ type: DataTypes.DATE},
    updatedAt:{ type: DataTypes.DATE},
    id_dono: { type: DataTypes.INTEGER,
        references: {
            model: Donos,
            Key: "id"
        }        
}
    },
    {tableName: "animais"}
    )

module.exports = Pets;
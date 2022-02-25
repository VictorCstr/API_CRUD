const Donos = require('./donos');
const Pets = require('./pets');

Pets.belongsTo(Donos, {foreignKey: "id_dono"});

Donos.hasMany(Pets, {foreignKey: "id_dono"});

module.exports = { Pets, Donos } ;
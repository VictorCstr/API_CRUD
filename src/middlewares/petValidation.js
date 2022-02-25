const Pets = require('../models/pets');

const PetValidation = async (req, res, next) => {

  const { nome, idade, especie, raca, id_dono } = req.body;

  if(!nome){
    return res.status(400).json({ error: 'Nome é obrigatório!' });
  }else if(!idade){
    return res.status(400).json({ error: 'Idade é obrigatório!' });
  }else if(!especie){
    return res.status(400).json({ error: 'Espécie é obrigatório!' });
  }else if(!raca){
    return res.status(400).json({ error: 'Raça é obrigatório!' });
  }else if(!id_dono){
    return res.status(400).json({ error: 'Nome do dono é obrigatório!' });
  }else{
    next();
  }

}

module.exports = PetValidation;
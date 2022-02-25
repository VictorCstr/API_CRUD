const Donos = require('../models/donos');

const DonoValidation = async (req, res, next) => {

  const { nome, telefone } = req.body;

  if(!nome){
    return res.status(400).json({ error: 'Nome é obrigatório!' });
  }else if(!telefone){
    return res.status(400).json({ error: 'O Telefone é obrigatório!' });
 
  }else{
    next();
  }

}

module.exports = DonoValidation;
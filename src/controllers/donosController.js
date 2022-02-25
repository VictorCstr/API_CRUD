const {Donos} = require('../models/index')

const donosController = {
    listarVarios: async (req,res) => {
        await Donos.findAll()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },

    listarUm: async(req,res) => {
        const { id } = req.params
         await Donos.findOne({
            where: {id}
        })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },

    cadastrar: async(req,res) => {
        const {nome,telefone} = req.body
         await Donos.create({
            nome,
           telefone
        })
        .then(response => {
            return res.status(201).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },

    atualizar: async(req,res) => {
        const {id} = req.params
        const {nome,telefone} = req.body
        await Donos.update({
        nome,
        telefone
        },{
            where: {id}
        })
        .then(response => {
            return res.status(200).json("Os dados do Dono foram atualizados!");
        })
        .catch(error => {
        return res.status(500).json(error);
            })
    },

    excluir: async(req,res) => {
        const {id} = req.params
        await Donos.destroy({
            where: {id}
        })
        .then(response => {
            return res.status(200).json("Os dados do Dono foram excluidos!");
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    }
}

module.exports = donosController;
const {Pets, Donos} = require('../models/index')

const petsController = {
    listarVarios: async (req,res) => {
        await Pets.findAll({
            include: Donos
        })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    },

    listarUm: async(req,res) => {
        try{
        const { id } = req.params
        const listaPets = await Pets.findOne({
            where: {id},
            include: Donos
        })
        res.status(200).json(listaPets)
    } catch(error){
        res.status(404).json("Houve algum erro, contate o administrador do sistema!")
    }

    },

    cadastrar: async(req,res) => {
        const {nome,idade,especie,raca,id_dono} = req.body
        await Pets.create({
            nome,
            idade,
            especie,
            raca,
            id_dono
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
        const {nome,idade,especie,raca,id_dono} = req.body
        await Pets.update({
            nome,
            idade,
            especie,
            raca,
            id_dono
            },{
                where: {id}
            })
        .then(response => {
            return res.status(200).json("Os dados do Pet foram atualizados!");
        })
        .catch(error => {
        return res.status(500).json(error);
              })
    },

    excluir: async(req,res) => {
        const {id} = req.params
        await Pets.destroy({
            where: {id}
        })
        .then(response => {
            return res.status(200).json("Os dados do Pet foram excluidos!");
        })
        .catch(error => {
        return res.status(500).json(error);
          })
    }

}

module.exports = petsController;
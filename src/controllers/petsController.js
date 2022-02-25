const {Pets, Donos} = require('../models/index')

const petsController = {
    listarVarios: async (req,res) => {
        const listaPets = await Pets.findAll()
    },

    listarUm: async(req,res) => {
        const { id } = req.params
        const listaPets = await Pets.findOne({
            where: id
        })
        res.status(200).json(listaPets)
    },

    cadastrar: async(req,res) => {
        const {nome,idade,especie,raca,id_dono} = req.body
        const novoPet = await Pets.create({
            nome,
            idade,
            especie,
            raca,
            id_dono
        })
        res.status(201).json(novoPet)
    },

    atualizar: async(req,res) => {
        const {id} = req.params
        const {nome,idade,especie,raca} = req.body
        const petAtualizado = await Pets.update({
            nome,
            idade,
            especie,
            raca}
            ,{
                where: id
            })
        res.status(200).json(petAtualizado)
    },

    excluir: async(req,res) => {
        const {id} = req.params
        await Pets.detroy({
            where: id
        })
        res.status(200).send('Pet excluido do banco de dados com sucesso!')
    }






}

module.exports = petsController;
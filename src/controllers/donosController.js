const {Pets, Donos} = require('../models/index')

const donosController = {
    listarVarios: async (req,res) => {
        const listaDonos = await Donos.findAll()
    },

    listarUm: async(req,res) => {
        const { id } = req.params
        const DonoUnico = await Pets.findOne({
            where: id
        })
        res.status(200).json(DonoUnico)
    },

    cadastrar: async(req,res) => {
        const {nome,telefone} = req.body
        const novoDono = await Donos.create({
            nome,
           telefone
        })
        res.status(201).json(novoDono)
    },

    atualizar: async(req,res) => {
        const {id} = req.params
        const {nome,telefone} = req.body
        const donoAtualizado = await Donos.update({
            nome,
            telefone
            },{
                where: id
            })
        res.status(200).json(donoAtualizado)
    },

    excluir: async(req,res) => {
        const {id} = req.params
        await Donos.detroy({
            where: id
        })
        res.status(200).send('Dono excluido do banco de dados com sucesso!')
    }
}

module.exports = donosController;
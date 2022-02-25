const express = require ('express');
const routes = express.Router();
const petsController = require('../controllers/petsController')
const donosController = require('../controllers/donosController');

routes.get("/" , (req,res) => {
        res.send('Servidor está funcionando, está é a página principal!')
})

routes.get('/pets', petsController.listarVarios)
routes.get('/pets/:id', petsController.listarUm )
routes.post('/pets', petsController.cadastrar)
routes.put('/pets/:id', petsController.atualizar)
routes.delete('/pets/:id', petsController.excluir )

routes.get('/donos', donosController.listarVarios )
routes.get('/donos/:id', donosController.listarUm )
routes.post('/donos', donosController.cadastrar)
routes.put('/donos/:id', donosController.atualizar)
routes.delete('/donos/:id', donosController.excluir)

module.exports = routes;
const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')
const Produto = require('./controllers/produtos.controller')

routes.get('/', Usuario.index);


// Rotas de Usuários
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details', Usuario.details);
routes.delete('/api/usuarios', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);


// Rotas de Produtos
routes.post('/api/produtos', Produto.create);
routes.get('/api/produtos', Produto.index);
routes.get('/api/produtos.details', Produto.details);
routes.delete('/api/produtos', Produto.delete);
routes.put('/api/produtos', Produto.update);


module.exports = routes;
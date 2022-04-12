const { Router } = require('express');

const CategoriaController = require('../controllers/CategoriaController');

const CategoriaRoutes = new Router();

CategoriaRoutes.delete("/deleteCategoria", CategoriaController.delete);
CategoriaRoutes.post("/adicionaCategoria", CategoriaController.post);
CategoriaRoutes.put("/atualizaCategoria", CategoriaController.put);
CategoriaRoutes.get("/categoria/:id?", CategoriaController.get);

module.exports = CategoriaRoutes;
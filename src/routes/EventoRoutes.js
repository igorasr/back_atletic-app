const { Router } = require('express');

const EventoController = require('../controllers/EventoController');

const EventoRoutes = new Router();

EventoRoutes.delete("/deleteEvento", EventoController.delete);
EventoRoutes.post("/adicionaEvento", EventoController.post);
EventoRoutes.put("/atualizaEvento", EventoController.put);
EventoRoutes.get("/evento", EventoController.get);

module.exports = EventoRoutes;
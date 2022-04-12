const { Router } = require('express');

const ComentarioController = require('../controllers/ComentarioController');

const ComentarioRoutes = new Router();

ComentarioRoutes.delete("/deleteComentario", ComentarioController.delete);
ComentarioRoutes.post("/adicionaComentario", ComentarioController.post);
ComentarioRoutes.put("/atualizaComentario", ComentarioController.put);
ComentarioRoutes.get("/Comentario", ComentarioController.get);

module.exports = ComentarioRoutes;
const { Router } = require('express');

const PostController = require('../controllers/PostController');

const PostRoutes = new Router();

PostRoutes.delete("/deletePost", PostController.delete);
PostRoutes.post("/adicionaPost", PostController.post);
PostRoutes.put("/atualizaPost", PostController.put);
PostRoutes.get("/Post", PostController.get);

module.exports = PostRoutes;
const PostRepository = require('../repositories/PostRepository')
const Post = require("../models/Post");

class PostController {
  get(req, res) {
    req.body.forEach((value, index, array) => {
      let post = new Post(value.descricao,
                          value.data_criacao);
      PostRepository.getPost(post)
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

  post(req, res) {
    req.body.forEach((value, index, array) => {
      let post = new Post(value.descricao,
                          value.data_criacao);
      PostRepository.adicionaPost(post, value.fk_evento_id)
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

  put(req, res) {
    req.body.forEach((value, index, array) => {
      let post = new Post(value.descricao,
                          value.data_criacao,
                          value.id);
      PostRepository.atualizaPost(post)
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

  delete(req, res) {
    req.body.forEach((value, index, array) => {
      let post = new Post(value.descricao,
                          value.data_criacao,
                          value.id);
      PostRepository.deletePost(post)
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

}

module.exports = new PostController();
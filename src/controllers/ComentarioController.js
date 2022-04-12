const Comentario = require('../models/Comentario')
const ComentarioRepository = require('../repositories/ComentarioRepository')

class ComentarioController {
  get(req, res) {
    req.body.forEach((value, index, array) => {
      let comentario = new Comentario(value.texto,
                                      value.data_comentario);
      ComentarioRepository.getComentario(comentario);
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

  post(req, res) {
    console.log(req.body)
    req.body.forEach((value, index, array) => {
      let comentario = new Comentario(value.texto,
                                      value.data_comentario);
      ComentarioRepository.adicionaComentario(comentario, value.fk_post_id)
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

  put(req, res) {
    req.body.forEach((value, index, array) => {
      let comentario = new Comentario(value.texto,
                                      value.data_comentario,
                                      value.id);
      ComentarioRepository.atualizaComentario(comentario)
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

  delete(req, res) {
    req.body.forEach((value, index, array) => {
      let comentario = new Comentario(value.texto,
                                      value.data_comentario,
                                      value.id);
      ComentarioRepository.deleteComentario(comentario)
    });
    return res.status(201).send({ message: 'Sucesso!' });
  }

}

module.exports = new ComentarioController();
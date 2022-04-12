const Categoria = require('../models/Categoria');
const CategoriaRepository = require('../repositories/CategoriaRepository')

class CategoriaController {
  async get(req, res){
      let result = await CategoriaRepository.getCategoria(req.params.id)
      return res.status(201).send();
  }

  post(req, res) {
    console.log(req.body)
      req.body.forEach((value, index, array) => {
        let categoria = new Categoria(value.descricao);
        CategoriaRepository.adicionaCategoria(categoria)
      });
    return res.status(201).send({message: 'Sucesso!'});
  }
  put(req, res){
    req.body.forEach((value, index, array) => {
      let categoria = new Categoria(value.descricao, value.id);
      CategoriaRepository.atualizaCategoria(categoria)
    });
  return res.status(201).send({message: 'Sucesso!'});
  }
  delete(req, res) {
    req.body.forEach((value, index, array) => {
      let categoria = new Categoria(value.descricao, value.id);
      CategoriaRepository.deleteCategoria(categoria)
    });
    return res.status(201).send({message: 'Sucesso!'});
  }
}  

module.exports = new CategoriaController();
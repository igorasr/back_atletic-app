const EventoRepository = require('../repositories/EventoRepository')
const Endereco = require("../models/Endereco");
const Categoria = require("../models/Categoria");
const Evento = require("../models/Evento");

class EventoController {
  get(req, res){
    req.body.forEach((value, index, array) => {
      let evento = new Evento(value.data_evento,
                              value.preco_ingresso,
                              value.quantidade_total_ingresso,
                              value.quantidade_ingresso_disponiveis,
                              value.eh_privado,
                              value.representante,
                              value.categoria);
      EventoRepository.getEvento(evento)
    });
    return res.status(201).send({message: 'Sucesso!'});
  }

  post(req, res) {
    console.log(req.body)
      req.body.forEach((value, index, array) => {
        let categoria = new Categoria(value.categoria.descricao, value.categoria.id)
        let endereco = new Endereco(value.endereco.estado,
                                    value.endereco.cidade,
                                    value.endereco.cep,
                                    value.endereco.bairro,
                                    value.endereco.rua,
                                    value.endereco.numero)
        let evento = new Evento(value.data_evento,
                                value.preco_ingresso,
                                value.quantidade_total_ingresso,
                                value.quantidade_ingresso_disponiveis,
                                value.eh_privado,
                                value.representante,
                                categoria,
                                endereco,
                                );
        EventoRepository.adicionaEvento(evento)
      });
    return res.status(201).send({message: 'Sucesso!'});
  }

  put(req, res){
    req.body.forEach((value, index, array) => {
      let categoria = new Categoria(value.categoria.descricao, value.categoria.id)
      let endereco = new Endereco(value.endereco.estado,
                                  value.endereco.cidade,
                                  value.endereco.cep,
                                  value.endereco.bairro,
                                  value.endereco.rua,
                                  value.endereco.numero)
      let evento = new Evento(value.data_evento,
                              value.preco_ingresso,
                              value.quantidade_total_ingresso,
                              value.quantidade_ingresso_disponiveis,
                              value.eh_privado,
                              value.representante,
                              categoria,
                              endereco,
                              value.id
                              );
      console.log(evento)
      EventoRepository.atualizaEvento(evento)
    });
  return res.status(201).send({message: 'Sucesso!'});
  }

  delete(req, res) {
    req.body.forEach((value, index, array) => {
      let evento = new Evento(value.data_evento,
                              value.preco_ingresso,
                              value.quantidade_total_ingresso,
                              value.quantidade_ingresso_disponiveis,
                              value.eh_privado,
                              value.representante,
                              value.endereco,
                              value.categoria,
                              value.id);
      EventoRepository.deleteEvento(evento)
    });
    return res.status(201).send({message: 'Sucesso!'});
  }

}

module.exports = new EventoController();
const conn = require('../models/db')
const EnderecoRepository = require('../repositories/EnderecoRepository')

class EventoRepository{
    adicionaEvento(Evento) {
        conn.connect(function(err){
        });
        const sql = "INSERT INTO Evento (data_evento, preco_ingresso, quantidade_total_ingresso, quantidade_ingresso_disponiveis, eh_privado, representante, fk_categoria_id) VALUES ?";
        const values = [
            [Evento.data_evento,
            Evento.preco_ingresso,
            Evento.quantidade_total_ingresso,
            Evento.quantidade_ingresso_disponiveis,
            Evento.eh_privado,
            Evento.representante,
            Evento.categoria.id
            ]
        ]
        conn.query(sql,[values], function (error, results, fields){
            if(error) return console.log(error);
            EnderecoRepository.adicionaEndereco(Evento.endereco,results.insertId)
        });
    }

    atualizaEvento(Evento) {
        conn.connect(function(err){
        });
        const sql = `UPDATE Evento SET data_evento='${Evento.data_evento}', preco_ingresso='${Evento.preco_ingresso}', quantidade_total_ingresso='${Evento.quantidade_total_ingresso}', quantidade_ingresso_disponiveis='${Evento.quantidade_ingresso_disponiveis}', eh_privado='${Evento.eh_privado}', representante='${Evento.representante}' WHERE id='${Evento.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log(results)
            EnderecoRepository.atualizaEndereco(Evento.endereco, Evento.id)
        });
    }

    deleteEvento(Evento){
        conn.connect(function(err){
        });
        const sql = `DELETE FROM Evento WHERE id='${Evento.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    getEvento(Evento){
        conn.connect(function(err){
        });
        const sql = `SELECT * FROM Evento WHERE id='${Evento.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            return results;
        });
    }
}

module.exports = new EventoRepository();

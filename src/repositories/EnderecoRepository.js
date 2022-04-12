const conn = require('../models/db')

class EnderecoRepository{
    adicionaEndereco(endereco, fk_evento_id) {
        const sql2 = "INSERT INTO endereco (estado, cidade, cep, bairro, rua, numero, fk_evento_id) VALUES ?";
        const values2 = [
            [endereco.estado,
            endereco.cidade,
            endereco.cep,
            endereco.bairro,
            endereco.rua,
            endereco.numero,
            fk_evento_id
            ]
        ]
        conn.query(sql2,[values2], function (error, results, fields){
            if(error) return console.log(error);
        });

    }

    atualizaEndereco(endereco,fk_evento_id) {
        conn.connect(function(err){
        });
        const sql = `UPDATE endereco SET estado='${endereco.estado}', cidade='${endereco.cidade}', cep='${endereco.cep}', bairro='${endereco.bairro}', rua='${endereco.rua}', numero='${endereco.numero}' WHERE fk_evento_id='${fk_evento_id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log(results)
        });
    }

    deleteEndereco(endereco){
        conn.connect(function(err){
        });
        const sql = `DELETE FROM endereco WHERE id='${endereco.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    getEndereco(endereco){
        conn.connect(function(err){
        });
        const sql = `SELECT * FROM Endereco WHERE id='${Endereco.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log(results)
            return results;
        });
    }
}

module.exports = new EnderecoRepository();

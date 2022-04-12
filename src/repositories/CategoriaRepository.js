const conn = require('../models/db')

class CategoriaRepository{
    adicionaCategoria(categoria) {
        conn.connect(function(err){
        });
        const sql = "INSERT INTO categoria (descricao) VALUES ?";
        const values = [
            [categoria.descricao]
        ]
        conn.query(sql,[values], function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    atualizaCategoria(categoria) {
        conn.connect(function(err){
        });
        const sql = `UPDATE categoria SET descricao='${categoria.descricao}' WHERE id='${categoria.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    deleteCategoria(categoria){
        conn.connect(function(err){
        });
        const sql = `DELETE FROM categoria WHERE id='${categoria.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    async getCategoria(id){
        let connection = await conn.connect();
        const sql = `SELECT * FROM categoria WHERE id='${id}'`;
        let [rows] = await connection.query(sql);
        console.log(rows)
        return rows
    }
}

module.exports = new CategoriaRepository();

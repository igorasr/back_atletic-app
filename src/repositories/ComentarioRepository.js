const conn = require('../models/db')
class ComentarioRepository{
    adicionaComentario(Comentario, fk_post_id) {
        conn.connect(function(err){
        });
        const sql = "INSERT INTO comentario (texto, data_comentario, fk_post_id) VALUES ?";
        const values = [
            [Comentario.texto, Comentario.data_comentario, fk_post_id]
        ]
        conn.query(sql,[values], function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    atualizaComentario(Comentario) {
        conn.connect(function(err){
        });
        const sql = `UPDATE comentario SET texto='${Comentario.texto}', data_comentario='${Comentario.data_comentario}' WHERE id='${Comentario.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    deleteComentario(Comentario){
        conn.connect(function(err){
        });
        const sql = `DELETE FROM comentario WHERE id='${Comentario.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    getComentario(Comentario){
        conn.connect(function(err){
        });
        const sql = `SELECT * FROM comentario WHERE id='${Comentario.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log(results)
            return results;
        });
    }
}

module.exports = new ComentarioRepository();

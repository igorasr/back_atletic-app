const conn = require('../models/db')
class PostRepository{
    adicionaPost(Post, fk_evento_id) {
        conn.connect(function(err){
        });
        const sql = "INSERT INTO post (descricao, data_criacao, fk_evento_id) VALUES ?";
        const values = [
            [Post.descricao,
            Post.data_criacao,
            fk_evento_id]
        ]
        conn.query(sql,[values], function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    atualizaPost(Post) {
        conn.connect(function(err){
        });
        const sql = `UPDATE post SET descricao='${Post.descricao}', data_criacao='${Post.data_criacao}' WHERE id='${Post.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    deletePost(Post){
        conn.connect(function(err){
        });
        const sql = `DELETE FROM post WHERE id='${Post.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
        });
    }

    getPost(Post){
        conn.connect(function(err){
        });
        const sql = `SELECT * FROM Post WHERE id='${Post.id}'`;
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log(results)
            return results;
        });
    }
}

module.exports = new PostRepository();

module.exports = class Post{
    constructor(descricao, data_criacao, id=''){
        this.id = id;
        this.descricao = descricao;    
        this.data_criacao = data_criacao;    
    }
}
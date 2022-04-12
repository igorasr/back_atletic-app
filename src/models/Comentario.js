module.exports = class Comentario{
    constructor(texto, data_comentario, id=''){
        this.id = id;
        this.texto = texto;    
        this.data_comentario = data_comentario;    
    }
}
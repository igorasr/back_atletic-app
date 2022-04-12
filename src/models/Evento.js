module.exports = class Evento{
    constructor(data_evento,
        preco_ingresso,
        quantidade_total_ingresso,
        quantidade_ingresso_disponiveis,
        eh_privado,
        representante,
        categoria,
        endereco,
        id=''){
        this.id = id;
        this.data_evento = data_evento
        this.preco_ingresso = preco_ingresso
        this.quantidade_total_ingresso = quantidade_total_ingresso
        this.quantidade_ingresso_disponiveis = quantidade_ingresso_disponiveis
        this.eh_privado = eh_privado
        this.representante = representante
        this.categoria = categoria
        this.endereco = endereco
    }
}
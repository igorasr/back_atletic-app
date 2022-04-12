module.exports = class Endereco{
        constructor(estado,
                    cidade,
                    cep,
                    bairro,
                    rua,
                    numero,
                    id=''){
            this.id = id;
            this.estado = estado
            this.cidade = cidade
            this.cep = cep
            this.bairro = bairro
            this.rua = rua
            this.numero = numero  
        }
    }
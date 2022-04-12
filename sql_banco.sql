CREATE DATABASE atletic_app;
USE atletic_app;

CREATE TABLE categoria (
	id integer PRIMARY KEY AUTO_INCREMENT,
    descricao varchar(20)
);

CREATE TABLE evento(
	id integer PRIMARY KEY AUTO_INCREMENT,
    data_evento DATETIME,
    preco_ingresso float,
    quantidade_total_ingresso int,
    quantidade_ingresso_disponiveis int,
    eh_privado bool,
    representante varchar(50),
	fk_categoria_id integer
);

CREATE TABLE endereco(
	id integer PRIMARY KEY AUTO_INCREMENT,
    fk_evento_id integer,
	estado varchar(30),
    cidade varchar(30),
    cep varchar(10),
	bairro varchar(30),
    rua varchar(100),
  	numero integer
);

CREATE TABLE post(
	id integer PRIMARY KEY AUTO_INCREMENT,
	descricao text,
    data_criacao DATETIME,    
    fk_evento_id integer
);

CREATE TABLE comentario(
	id integer PRIMARY KEY AUTO_INCREMENT,
    texto text,
    data_comentario datetime,
    fk_post_id integer
);
 
ALTER TABLE comentario ADD CONSTRAINT FK_comentario
    foreign key (fk_post_id)
    references post (id)
    on delete cascade;
    
ALTER TABLE post ADD CONSTRAINT FK_post
    foreign key (fk_evento_id)
    references evento (id)
    on delete set null;
    
ALTER TABLE evento ADD CONSTRAINT FK_evento
    foreign key (fk_categoria_id)
    references categoria (id)
    on delete set null;
    
ALTER TABLE endereco ADD CONSTRAINT FK_endereco
    foreign key (fk_evento_id)
    references evento (id)
    on delete cascade;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'devpass';


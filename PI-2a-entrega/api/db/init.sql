CREATE TABLE administrador(
    id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE endereco(
    id INT AUTO_INCREMENT,
    cep VARCHAR(100) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    complemento VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE aluno(
    id INT AUTO_INCREMENT,
    matricula INT NOT NULL,
    curso VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    contato VARCHAR(50) NOT NULL,
    administrador_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (administrador_id) REFERENCES administrador(id)
);

CREATE TABLE aluno_endereco(
    aluno_id INT NOT NULL,
    endereco_id INT NOT NULL,
    PRIMARY KEY (aluno_id, endereco_id),
    FOREIGN KEY (aluno_id) REFERENCES aluno(id),
    FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);

CREATE TABLE professor(
    id INT AUTO_INCREMENT,
    disciplina VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    contato VARCHAR(50) NOT NULL,
    administrador_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (administrador_id) REFERENCES administrador(id)
);

CREATE TABLE professor_endereco(
    professor_id INT NOT NULL,
    endereco_id INT NOT NULL,
    PRIMARY KEY (professor_id, endereco_id),
    FOREIGN KEY (professor_id) REFERENCES professor(id),
    FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);

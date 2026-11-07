CREATE DATABASE triply;
USE triply;

-- Tabela de usuários
CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

select * from usuario;

-- Tabela de viagens
CREATE TABLE viagem (
    idViagem INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    pais VARCHAR(100),
    dataInicio DATE NOT NULL,
    dataFim DATE NOT NULL,
    orcamento DECIMAL(10,2) NOT NULL,
    imagemCapa VARCHAR(255),
    status VARCHAR(20) NOT NULL,
    fkUsuario INT NOT NULL,

    CONSTRAINT chk_status_viagem
       CHECK (status IN ('Planejamento', 'Confirmada', 'Em andamento', 'Concluída', 'Cancelada')),

    CONSTRAINT fk_viagem_usuario
        FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
        
	CONSTRAINT chkOrcamento
		CHECK (orcamento >= 0)
);

-- Tabela de despesas
CREATE TABLE despesa (
    idDespesa INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(150) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    valorPrevisto DECIMAL(10,2),
	valorRealizado DECIMAL(10,2),
    dataDespesa DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'Prevista',
    fkViagem INT NOT NULL,
    
    CONSTRAINT chkStatusDespesa
        CHECK (status IN ('Prevista', 'Paga')),
        
    CONSTRAINT chkValorPrevisto
        CHECK (valorPrevisto >= 0),
        
	CONSTRAINT chkValorRealizado
		CHECK (valorRealizado >= 0),
        
    CONSTRAINT fkDespesaViagem
        FOREIGN KEY (fkViagem)
        REFERENCES viagem(idViagem)
);

-- Tabela de experiências
CREATE TABLE experiencia (
    idExperiencia INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    localizacao VARCHAR(150),
    dataExperiencia DATE NOT NULL,
    horario TIME,
    fkViagem INT NOT NULL,

    CONSTRAINT fk_experiencia_viagem
        FOREIGN KEY (fkViagem) REFERENCES viagem(idViagem)
);

-- Tabela de checklist
CREATE TABLE checklist (
    idChecklist INT PRIMARY KEY AUTO_INCREMENT,
    tarefa VARCHAR(150) NOT NULL,
    concluida TINYINT NOT NULL DEFAULT 0,
    fkViagem INT NOT NULL,

    CONSTRAINT chk_checklist_concluida
        CHECK (concluida IN (0, 1)),

    CONSTRAINT fk_checklist_viagem
        FOREIGN KEY (fkViagem) REFERENCES viagem(idViagem)
);
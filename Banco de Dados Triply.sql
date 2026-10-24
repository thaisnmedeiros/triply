-- ==========================================
-- TRIPLY
-- Projeto Individual - SPTech
-- Banco de Dados MySQL
-- ==========================================

CREATE DATABASE triply;

USE triply;

-- ==========================================
-- TABELA USUARIO
-- ==========================================

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);


-- ==========================================
-- TABELA VIAGEM
-- ==========================================

CREATE TABLE viagem (
    idViagem INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    pais VARCHAR(100),
    dataInicio DATE NOT NULL,
    dataFim DATE NOT NULL,
    orcamento DECIMAL(10,2) NOT NULL,
    imagemCapa VARCHAR(255),
    status VARCHAR(20) NOT NULL DEFAULT 'Planejamento',
    fkUsuario INT NOT NULL,
    CONSTRAINT chkStatusViagem
        CHECK (status IN (
            'Planejamento',
            'Confirmada',
            'Concluída',
            'Cancelada'
        )),
    CONSTRAINT chkDatasViagem
        CHECK (dataFim >= dataInicio),
    CONSTRAINT chkOrcamentoViagem
        CHECK (orcamento >= 0),
    CONSTRAINT fkViagemUsuario
        FOREIGN KEY (fkUsuario)
        REFERENCES usuario(idUsuario)
);


-- ==========================================
-- TABELA DESPESA
-- ==========================================

CREATE TABLE despesa (
    idDespesa INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(150) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    dataDespesa DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'Prevista',
    fkViagem INT NOT NULL,
    CONSTRAINT chkStatusDespesa
        CHECK (status IN ('Prevista', 'Paga')),
    CONSTRAINT chkValorDespesa
        CHECK (valor >= 0),
    CONSTRAINT fkDespesaViagem
        FOREIGN KEY (fkViagem)
        REFERENCES viagem(idViagem)
);


-- ==========================================
-- TABELA EXPERIENCIA
-- ==========================================

CREATE TABLE experiencia (
    idExperiencia INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    localizacao VARCHAR(150),
    dataExperiencia DATE,
    horario TIME,
    fkViagem INT NOT NULL,
    CONSTRAINT fkExperienciaViagem
        FOREIGN KEY (fkViagem)
        REFERENCES viagem(idViagem)
);


-- ==========================================
-- TABELA CHECKLIST
-- ==========================================

CREATE TABLE checklist (
    idChecklist INT PRIMARY KEY AUTO_INCREMENT,
    tarefa VARCHAR(150) NOT NULL,
    concluida TINYINT NOT NULL DEFAULT 0,
    fkViagem INT NOT NULL,
    CONSTRAINT chkChecklistConcluido
        CHECK (concluida IN (0, 1)),
    CONSTRAINT fkChecklistViagem
        FOREIGN KEY (fkViagem)
        REFERENCES viagem(idViagem)
);
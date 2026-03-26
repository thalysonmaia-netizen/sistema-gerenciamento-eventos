CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    local VARCHAR(150) NOT NULL,
    descricao TEXT
);

-- Índice para busca rápida por nome
CREATE INDEX idx_nome_evento ON eventos(nome);
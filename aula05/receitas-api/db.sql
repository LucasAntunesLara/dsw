-- Criação do banco de dados
CREATE DATABASE receitas_db;

-- Use o banco de dados recém-criado
USE receitas_db;

-- Criação da tabela 'receitas'
CREATE TABLE
    receitas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        descricao TEXT NOT NULL,
        ingredientes TEXT NOT NULL,
        modo_preparo TEXT NOT NULL,
        tempo_preparo INT NOT NULL,
        dificuldade VARCHAR(20) NOT NULL,
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Inserção de dados
INSERT INTO
    receitas (
        nome,
        descricao,
        ingredientes,
        modo_preparo,
        tempo_preparo,
        dificuldade
    )
VALUES
    (
        'Bolo de Chocolate Simples',
        'Um delicioso bolo de chocolate fofinho e fácil de fazer, perfeito para o café da tarde.',
        '3 ovos, 2 xícaras de farinha de trigo, 1 xícara de açúcar, 1 xícara de chocolate em pó, 1 xícara de leite, 1/2 xícara de óleo, 1 colher de sopa de fermento em pó',
        'Bata os ovos, açúcar e óleo até formar um creme. Adicione o leite e misture. Acrescente a farinha e o chocolate aos poucos. Por último, adicione o fermento. Asse em forno preaquecido a 180°C por 35 minutos.',
        35,
        'Fácil'
    ),
    (
        'Macarrão à Carbonara',
        'Massa italiana clássica com molho cremoso de ovos, queijo e bacon.',
        '400g de espaguete, 200g de bacon em cubos, 4 gemas, 1 ovo inteiro, 100g de queijo parmesão ralado, pimenta-do-reino a gosto, sal a gosto',
        'Cozinhe o macarrão em água salgada. Frite o bacon até dourar. Em uma tigela, misture as gemas, o ovo, o queijo e pimenta. Escorra o macarrão e misture com o bacon ainda quente. Adicione a mistura de ovos e misture rapidamente. Sirva imediatamente.',
        25,
        'Médio'
    ),
    (
        'Salada Caesar',
        'Salada refrescante com alface, croutons, parmesão e molho caesar caseiro.',
        '1 pé de alface romana, 2 peitos de frango grelhados em tiras, 1 xícara de croutons, 50g de queijo parmesão em lascas, 1 dente de alho, 2 anchovas, 1 gema, suco de 1 limão, 1/2 xícara de azeite, sal e pimenta a gosto',
        'Prepare o molho batendo no liquidificador o alho, anchovas, gema, limão e azeite. Tempere com sal e pimenta. Em uma tigela, misture a alface picada, o frango, os croutons e o parmesão. Regue com o molho e sirva.',
        20,
        'Fácil'
    );
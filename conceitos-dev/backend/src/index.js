const { response } = require('express');
const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * GET => Buscar informações do back-end
 * POST => Criar uma informação no back-end
 * PUT/PATCH => Alterar uma informação no back-end
 * DELETE => Deletar uma informação no back-end
 * 
 * Lembre-se que após as barras temos o recurso de projetos.
 * Então chamamos de recurso a informação que queremos acessar.
 */

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 4',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 4',
    ]);
});


app.listen(3333, () => {
    console.log('🚀 Servidor inicializado!')
});
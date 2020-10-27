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
    return response.json({
        message: 'Hello Thadeu'
    });
})

app.listen(3333, () => {
    console.log('🚀 Servidor inicializado!')
});
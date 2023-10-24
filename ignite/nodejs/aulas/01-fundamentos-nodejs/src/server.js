// Configuramos a opção de importação por módulo dentro do arquivo package.json.
// Uma outra forma padrão de importação é utilizando o CommonJS
// Utilizandoa nomenclatura "node:" definimos que estamos utilizando o módulo nativo do Node.js.

import http from 'node:http';

const server = http.createServer((req, res) => {
    // req => obter informações da requisição;

    return res.end('hello world');
});

server.listen(3333);  //localhost:3333

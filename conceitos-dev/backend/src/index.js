const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.send('Ola mundo');
})

app.listen(3333);
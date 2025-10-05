const express = require('express');
const cors = require('cors');

const dados = require('./controle/inimigosControle');

const PORT = process.PORT || 8080;

const app = express();

//Configuração de permissões
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');    //Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET'); //Verbos permitidos na API

    app.use(cors()); //Carrega as configurções no CORS da API 
    next(); // Próximo, carregar os próximos endpoints
});

// ✅ Mensagem HTML na URL base
app.get('/', (request, response) => {
    response.status(200).send('Tudo funcionando como deveria :)');
});

app.get('/v1/hollow/obterTodosInimigos', function (request, response) {
    let monstros = dados.obterTodosInimigos();

    response.status(monstros.status_code);
    response.json(monstros);
});

app.listen(PORT, function () {
    console.log(`API rodando em http://localhost:${PORT}`);
});
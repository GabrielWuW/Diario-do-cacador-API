/*************************************************************************
 * Objetivo: Criar as funções para a API do diario do caçador
 * Data: 04/10/2025
 * Versão: 1.0.10.25
 * 
 ************************************************************************/

const MESSAGE_ERRO = { status: false, status_code: 500 };
const dados = require('./dados');

const obterTodosInimigos = function () {
    let message = { status: true, status_code: 200, dados: [] };

    dados.dados.monstros.forEach(function (item) {
        message.dados.push({
            id: item.id,
            nome: item.nome,
            descricaoUm: item.descricaoUm,
            descricaoDois: item.descricaoDois,
            descricaoTres: item.descricaoTres,
            icon: item.icon,
            imagem: item.imagem
        });
    });

    if (message.dados.length <= 0) {
        return MESSAGE_ERRO;
    } else {
        return message;
    }
};

module.exports = {
    obterTodosInimigos,
}
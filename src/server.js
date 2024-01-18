// Configuração do dotenv para carregar variáveis de ambiente do arquivo 'variaveis.env'
require('dotenv').config({ path: 'variaveis.env' });

// Importação do módulo express, que é um framework para criação de servidores web em Node.js
const express = require('express');

// Importação do módulo cors para lidar com políticas de mesma origem em requisições HTTP
const cors = require('cors');

// Importação do módulo body-parser para facilitar o tratamento de dados enviados no corpo das requisições HTTP
const bodyParser = require('body-parser');

// Importação das rotas definidas em outro arquivo (presumivelmente './routes')
const routes = require('./routes');

// Criação de uma instância do servidor express
const server = express();

// Middleware para habilitar o CORS (Cross-Origin Resource Sharing)
server.use(cors());

// Middleware para processar dados do corpo de requisições com formato url-encoded
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', routes);

// Inicia o servidor na porta especificada nas variáveis de ambiente (process.env.PORT)
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});

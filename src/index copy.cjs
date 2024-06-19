const express = require('express');
const cors = require('cors');

// Importando rotas
const rotas = require('./rotas.cjs');

const app = express();
app.use(cors()); // Habilita o CORS para todas as rotas

// Middleware para converter os dados em JSON
app.use(express.json()); 

app.use(rotas);

//Porta do servidor
app.listen(3000);
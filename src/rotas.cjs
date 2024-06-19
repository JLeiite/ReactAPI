const express = require('express');
const fs = require('fs');
const path = require('path');

const rotas = express();

// Rota para coletar dados do formulário
rotas.post('/coleta-dados', (req, res) => {
    const formData = req.body;
    console.log('Dados recebidos:', formData);

    // Salvando os dados em um arquivo JSON
    const fileName = `dados_formulario_${Date.now()}.json`; // Nome do arquivo com timestamp atual
    const filePath = path.join(__dirname, 'dados', fileName); // Caminho para salvar o arquivo

    fs.writeFile(filePath, JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error('Erro ao salvar arquivo:', err);
            return res.status(500).json({ error: 'Erro ao salvar arquivo' });
        } else {
            console.log('Arquivo salvo com sucesso:', filePath);
            return res.json({ message: 'Dados recebidos e arquivo salvo com sucesso!' });
        }
    });

    /* Aqui você pode processar os dados como desejar (salvar no banco de dados, etc.)
    return res.json({ message: 'Dados recebidos com sucesso!' });
    */
});

module.exports = rotas;
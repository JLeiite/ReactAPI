const express = require('express');
const cors = require('cors');

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
app.use(cors()); // Habilita o CORS para todas as rotas

// Middleware para converter os dados em JSON
app.use(express.json()); 

//Porta do servidor
app.listen(3000);

// Exportação em CSV
const dadosDir = path.join(__dirname, 'dados'); // Diretório 'dados' relativo ao diretório do script
const csvFilePath = path.join(dadosDir, 'dados_formulario.csv'); // Caminho para o arquivo CSV

// Verifica se o arquivo CSV existe. Se não existir, cria o arquivo com o cabeçalho.
if (!fs.existsSync(csvFilePath)) {
  const csvWriter = createCsvWriter({
    path: csvFilePath,
    header: [
      { id: 'cpfCnpjRemetente', title: 'CPF/CNPJ Remetente' },
      { id: 'IERemetente', title: 'IE Remetente' },
      { id: 'remetente', title: 'Remetente' },
      { id: 'cepColeta', title: 'CEP Coleta' },
      { id: 'ufColeta', title: 'UF Coleta' },
      { id: 'cidadeColeta', title: 'Cidade Coleta' },
      { id: 'bairroColeta', title: 'Bairro Coleta' },
      { id: 'enderecoColeta', title: 'Endereço Coleta' },
      { id: 'numeroColeta', title: 'Número Coleta' },
      { id: 'complementoColeta', title: 'Complemento Coleta' },
      { id: 'responsavelColeta', title: 'Responsável Coleta' },
      { id: 'telefoneColeta', title: 'Telefone Coleta' },
      { id: 'cpfCnpjDestinatario', title: 'CPF/CNPJ Destinatário' },
      { id: 'IEDestinatario', title: 'IE Destinatário' },
      { id: 'destinatario', title: 'Destinatário' },
      { id: 'cepEntrega', title: 'CEP Entrega' },
      { id: 'ufEntrega', title: 'UF Entrega' },
      { id: 'cidadeEntrega', title: 'Cidade Entrega' },
      { id: 'bairroEntrega', title: 'Bairro Entrega' },
      { id: 'enderecoEntrega', title: 'Endereço Entrega' },
      { id: 'numeroEntrega', title: 'Número Entrega' },
      { id: 'complementoEntrega', title: 'Complemento Entrega' },
      { id: 'responsavelEntrega', title: 'Responsável Entrega' },
      { id: 'telefoneEntrega', title: 'Telefone Entrega' },
      { id: 'dataColeta', title: 'Data Coleta' },
      { id: 'descricaoMaterial', title: 'Descrição Material' },
      { id: 'valorNF', title: 'Valor NF' },
      { id: 'notaFiscal', title: 'Nota Fiscal' },
      { id: 'quantidade', title: 'Quantidade' },
      { id: 'peso', title: 'Peso' },
      { id: 'cpfCnpjPagador', title: 'CPF/CNPJ Pagador' },
      { id: 'expedidor', title: 'Expedidor' },
      { id: 'emailContato', title: 'E-mail Contato' },
      { id: 'solicitante', title: 'Solicitante' },
      { id: 'telefoneSolicitante', title: 'Telefone Solicitante' },
      { id: 'checkMail', title: 'Receber por e-mail' },
      { id: 'checkWhatsapp', title: 'Receber por WhatsApp' }
    ]
  });

  csvWriter.writeRecords([]) // Inicia o arquivo com uma linha vazia
    .then(() => {
      console.log('Arquivo CSV criado com sucesso:', csvFilePath);
    })
    .catch(err => {
      console.error('Erro ao criar arquivo CSV:', err);
    });
}

// Rota para coletar dados do formulário e adicionar ao arquivo CSV
app.post('/coleta-dados', async (req, res) => {
  const formData = req.body;
  console.log('Dados recebidos:', formData);

  try {
    // Cria um objeto com os dados a serem escritos no CSV
    const dataToWrite = {
      cpfCnpjRemetente: formData.cpfCnpjRemetente || '',
      IERemetente: formData.IERemetente || '',
      remetente: formData.remetente || '',
      cepColeta: formData.cepColeta || '',
      ufColeta: formData.ufColeta || '',
      cidadeColeta: formData.cidadeColeta || '',
      bairroColeta: formData.bairroColeta || '',
      enderecoColeta: formData.enderecoColeta || '',
      numeroColeta: formData.numeroColeta || '',
      complementoColeta: formData.complementoColeta || '',
      responsavelColeta: formData.responsavelColeta || '',
      telefoneColeta: formData.telefoneColeta || '',
      cpfCnpjDestinatario: formData.cpfCnpjDestinatario || '',
      IEDestinatario: formData.IEDestinatario || '',
      destinatario: formData.destinatario || '',
      cepEntrega: formData.cepEntrega || '',
      ufEntrega: formData.ufEntrega || '',
      cidadeEntrega: formData.cidadeEntrega || '',
      bairroEntrega: formData.bairroEntrega || '',
      enderecoEntrega: formData.enderecoEntrega || '',
      numeroEntrega: formData.numeroEntrega || '',
      complementoEntrega: formData.complementoEntrega || '',
      responsavelEntrega: formData.responsavelEntrega || '',
      telefoneEntrega: formData.telefoneEntrega || '',
      dataColeta: formData.dataColeta || '',
      descricaoMaterial: formData.descricaoMaterial || '',
      valorNF: formData.valorNF || '',
      notaFiscal: formData.notaFiscal || '',
      quantidade: formData.quantidade || '',
      peso: formData.peso || '',
      cpfCnpjPagador: formData.cpfCnpjPagador || '',
      expedidor: formData.expedidor || '',
      emailContato: formData.emailContato || '',
      solicitante: formData.solicitante || '',
      telefoneSolicitante: formData.telefoneSolicitante || '',
      checkMail: formData.checkMail || false,
      checkWhatsapp: formData.checkWhatsapp || false
    };

    // Adiciona os dados ao arquivo CSV
    const csvWriter = createCsvWriter({
      path: csvFilePath,
      header: [
        { id: 'cpfCnpjRemetente', title: 'CPF/CNPJ Remetente' },
        { id: 'IERemetente', title: 'IE Remetente' },
        { id: 'remetente', title: 'Remetente' },
        { id: 'cepColeta', title: 'CEP Coleta' },
        { id: 'ufColeta', title: 'UF Coleta' },
        { id: 'cidadeColeta', title: 'Cidade Coleta' },
        { id: 'bairroColeta', title: 'Bairro Coleta' },
        { id: 'enderecoColeta', title: 'Endereço Coleta' },
        { id: 'numeroColeta', title: 'Número Coleta' },
        { id: 'complementoColeta', title: 'Complemento Coleta' },
        { id: 'responsavelColeta', title: 'Responsável Coleta' },
        { id: 'telefoneColeta', title: 'Telefone Coleta' },
        { id: 'cpfCnpjDestinatario', title: 'CPF/CNPJ Destinatário' },
        { id: 'IEDestinatario', title: 'IE Destinatário' },
        { id: 'destinatario', title: 'Destinatário' },
        { id: 'cepEntrega', title: 'CEP Entrega' },
        { id: 'ufEntrega', title: 'UF Entrega' },
        { id: 'cidadeEntrega', title: 'Cidade Entrega' },
        { id: 'bairroEntrega', title: 'Bairro Entrega' },
        { id: 'enderecoEntrega', title: 'Endereço Entrega' },
        { id: 'numeroEntrega', title: 'Número Entrega' },
        { id: 'complementoEntrega', title: 'Complemento Entrega' },
        { id: 'responsavelEntrega', title: 'Responsável Entrega' },
        { id: 'telefoneEntrega', title: 'Telefone Entrega' },
        { id: 'dataColeta', title: 'Data Coleta' },
        { id: 'descricaoMaterial', title: 'Descrição Material' },
        { id: 'valorNF', title: 'Valor NF' },
        { id: 'notaFiscal', title: 'Nota Fiscal' },
        { id: 'quantidade', title: 'Quantidade' },
        { id: 'peso', title: 'Peso' },
        { id: 'cpfCnpjPagador', title: 'CPF/CNPJ Pagador' },
        { id: 'expedidor', title: 'Expedidor' },
        { id: 'emailContato', title: 'E-mail Contato' },
        { id: 'solicitante', title: 'Solicitante' },
        { id: 'telefoneSolicitante', title: 'Telefone Solicitante' },
        { id: 'checkMail', title: 'Receber por e-mail' },
        { id: 'checkWhatsapp', title: 'Receber por WhatsApp' }
      ],
      append: true // Opção para adicionar ao final do arquivo
    });

    await csvWriter.writeRecords([dataToWrite]); // Adiciona uma nova linha com os dados

    console.log('Dados adicionados ao arquivo CSV:', dataToWrite);
    res.json({ message: 'Dados recebidos e adicionados ao arquivo CSV!' });

  } catch (error) {
    console.error('Erro ao adicionar dados ao arquivo CSV:', error);
    res.status(500).json({ error: 'Erro interno ao adicionar dados ao arquivo CSV' });
  }
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno no servidor');
});
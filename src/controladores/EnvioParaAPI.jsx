export async function enviarParaAPI(dadosParaAPI) {
    try {
        const response = await fetch('http://localhost:3000/coleta-dados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosParaAPI)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }

        const data = await response.json();
        console.log('Dados enviados com sucesso:', data);
        return data; // Retorna os dados da resposta da API, se necessário

    } catch (error) {
        console.error('Erro ao enviar dados:', error.message);
        throw error; // Lança o erro para ser tratado pelo componente que chamou a função
    }
}

// Ficheiro: ViagemParis/netlify/functions/gemini-proxy.js

exports.handler = async function(event, context) {
    // A sua chave da API da Gemini será lida da variável de ambiente configurada no Netlify
    const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
    
    // Endpoint da API da Gemini
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    // 1. Verificar se a chave da API está disponível
    if (!GEMINI_API_KEY) {
        console.error("Erro na função serverless: A variável de ambiente REACT_APP_GEMINI_API_KEY não está definida no Netlify.");
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Configuração do servidor incompleta (chave API ausente)." })
        };
    }

    // 2. Aceitar apenas pedidos POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        // 3. Obter o 'prompt' do corpo do pedido
        // O Netlify passa o corpo do pedido como uma string, então precisamos fazer o parse.
        const requestBody = JSON.parse(event.body);
        const prompt = requestBody.prompt;

        if (!prompt) {
            return { statusCode: 400, body: JSON.stringify({ error: 'O prompt é obrigatório no corpo do pedido.' }) };
        }

        // 4. Preparar o payload para a API da Gemini
        const payload = {
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        };

        // 5. Fazer a chamada à API da Gemini
        const geminiResponse = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        // 6. Tratar a resposta da API da Gemini
        const geminiData = await geminiResponse.json(); // Tenta sempre fazer o parse como JSON

        if (!geminiResponse.ok) {
            const errorDetail = geminiData.error ? geminiData.error.message : (await geminiResponse.text()); // Tenta obter mais detalhes do erro
            console.error('Erro da API Gemini:', geminiResponse.status, errorDetail);
            return { 
                statusCode: geminiResponse.status, 
                body: JSON.stringify({ error: `Erro da API Gemini: ${errorDetail || geminiResponse.statusText}` }) 
            };
        }
        
        // 7. Extrair o texto da resposta
        let responseText = "Não foi possível obter uma resposta da IA ou a resposta está vazia."; 
        if (geminiData.candidates && geminiData.candidates.length > 0 &&
            geminiData.candidates[0].content && geminiData.candidates[0].content.parts &&
            geminiData.candidates[0].content.parts.length > 0) {
            responseText = geminiData.candidates[0].content.parts[0].text;
        } else if (geminiData.promptFeedback && geminiData.promptFeedback.blockReason) {
            responseText = `Conteúdo bloqueado pela API: ${geminiData.promptFeedback.blockReason}. Tente uma pergunta diferente.`;
            console.warn('Prompt bloqueado pela API Gemini:', geminiData.promptFeedback.blockReason);
        } else if (geminiData.error) { // Verifica se a própria resposta da Gemini é um erro estruturado
            responseText = `Erro da API Gemini: ${geminiData.error.message}.`;
            console.error('API Gemini retornou um objeto de erro:', geminiData.error);
        } else {
            console.warn('Estrutura de resposta inesperada da API Gemini:', geminiData);
        }

        // 8. Enviar a resposta de volta para o cliente
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Permite chamadas de qualquer origem (ajuste se necessário para produção mais restrita)
            },
            body: JSON.stringify({ response: responseText }),
        };

    } catch (error) {
        // 9. Lidar com erros inesperados na função (ex: erro no JSON.parse)
        console.error('Erro na execução da função serverless (netlify/functions/gemini-proxy.js):', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Erro interno do servidor: ${error.message}` }),
        };
    }
};

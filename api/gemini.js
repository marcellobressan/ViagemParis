// ViagemParis/api/gemini.js

// Esta é a forma padrão de exportar uma função no Node.js para que o Vercel a reconheça como um handler de API.
// 'req' (request) contém informações sobre o pedido que o seu site faz a esta função.
// 'res' (response) é usado para enviar uma resposta de volta para o seu site.
export default async function handler(req, res) {
    // 1. Obter a sua Chave da API da Gemini das Variáveis de Ambiente do Vercel:
    //    Isto é crucial para a segurança. A chave NUNCA deve estar diretamente no código.
    //    No painel do Vercel (Settings > Environment Variables), você configurou uma variável
    //    chamada REACT_APP_GEMINI_API_KEY com o valor da sua chave.
    const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
    
    // 2. Construir o URL da API da Gemini:
    //    Este é o endpoint da API da Gemini que vamos chamar.
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    // 3. Verificar o Método do Pedido:
    //    A nossa função no index.html fará um pedido POST. Só aceitamos esse método.
    if (req.method !== 'POST') {
        // Se não for POST, retorna um erro.
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // 4. Obter o 'prompt' do corpo do pedido:
        //    O JavaScript do seu index.html enviará o prompt (a pergunta para a IA)
        //    no corpo do pedido POST, em formato JSON. O Vercel já faz o parse do JSON
        //    automaticamente e coloca-o em req.body.
        const { prompt } = req.body;

        // 5. Verificar se o prompt foi enviado:
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // 6. Preparar o 'payload' (dados) para enviar à API da Gemini:
        //    A API da Gemini espera um formato específico para o pedido.
        const payload = {
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        };

        // 7. Fazer a chamada à API da Gemini:
        //    Usamos 'fetch' (uma funcionalidade nativa do Node.js moderno) para fazer o pedido POST.
        const geminiResponse = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload), // O corpo do pedido deve ser uma string JSON.
        });

        // 8. Verificar se a chamada à API da Gemini foi bem-sucedida:
        if (!geminiResponse.ok) {
            // Se houve um erro, tentamos obter mais detalhes e retornamos um erro.
            const errorText = await geminiResponse.text();
            console.error('Gemini API error:', errorText); // Importante para depuração nos logs do Vercel
            return res.status(geminiResponse.status).json({ error: `Gemini API Error: ${errorText}` });
        }

        // 9. Obter os dados da resposta da API da Gemini:
        const geminiData = await geminiResponse.json();
        
        // 10. Extrair o texto da resposta da IA:
        //     A estrutura da resposta da Gemini pode variar um pouco, mas geralmente o texto
        //     está dentro de candidates[0].content.parts[0].text.
        let responseText = "Não foi possível obter uma resposta da IA ou a resposta está vazia."; // Mensagem padrão
        if (geminiData.candidates && geminiData.candidates.length > 0 &&
            geminiData.candidates[0].content && geminiData.candidates[0].content.parts &&
            geminiData.candidates[0].content.parts.length > 0) {
            responseText = geminiData.candidates[0].content.parts[0].text;
        } else if (geminiData.promptFeedback && geminiData.promptFeedback.blockReason) {
            // Se a API bloqueou o prompt por alguma razão (segurança, etc.)
            responseText = `Conteúdo bloqueado pela API: ${geminiData.promptFeedback.blockReason}. Tente uma pergunta diferente.`;
        } else if (geminiData.error) {
            // Se a própria API da Gemini retornou um erro estruturado
            responseText = `Erro da API Gemini: ${geminiData.error.message}.`;
            console.error('Gemini API returned an error object:', geminiData.error);
        }


        // 11. Enviar a resposta da IA de volta para o seu site (index.html):
        //     Retornamos um status 200 (OK) e a resposta da IA em formato JSON.
        res.status(200).json({ response: responseText });

    } catch (error) {
        // 12. Lidar com quaisquer outros erros inesperados:
        console.error('Error in Vercel function (api/gemini.js):', error); // Importante para depuração nos logs do Vercel
        res.status(500).json({ error: error.message });
    }
}


import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// The Gemini API key is expected to be available in the process.env object.
// This is typically handled by a build tool (like Vite or Webpack) that replaces
// `process.env.API_KEY` with the actual value at build time.
const GEMINI_API_KEY = process.env.API_KEY;


if (!GEMINI_API_KEY) {
  console.warn(
    "Gemini API key (API_KEY) not found. Please ensure it is set in your environment variables. AI features will be disabled."
  );
}

// Initialize GoogleGenAI with the API key from the environment variable.
const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

const getModelName = (task: 'text' | 'image' | 'text-with-search') => {
  if (task === 'image') return 'imagen-3.0-generate-002';
  return 'gemini-2.5-flash-preview-04-17'; // Default for text and search
};

export const generateText = async (prompt: string): Promise<string> => {
  if (!ai) return "Serviço de IA indisponível (API Key não configurada).";
  try {
    const modelName = getModelName('text');
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        // No thinkingConfig for general text generation to ensure higher quality by default
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error (generateText):", error);
    return `Erro ao comunicar com a IA: ${error instanceof Error ? error.message : String(error)}`;
  }
};

export const generateTextWithSearch = async (prompt: string): Promise<{ text: string, sources: any[] | undefined }> => {
  if (!ai) return { text: "Serviço de IA indisponível (API Key não configurada).", sources: undefined };
  try {
    const modelName = getModelName('text-with-search');
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        tools: [{googleSearch: {}}],
      }
    });
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    return { text: response.text, sources };
  } catch (error) {
    console.error("Gemini API error (generateTextWithSearch):", error);
    return { 
        text: `Erro ao comunicar com a IA com busca: ${error instanceof Error ? error.message : String(error)}`, 
        sources: undefined 
    };
  }
};


export const generatePoiCuriosities = async (poiName: string): Promise<string> => {
  if (!ai) return "Serviço de IA indisponível.";
  const prompt = `Conte-me 2-3 curiosidades interessantes e pouco conhecidas sobre "${poiName}" em Paris. As curiosidades devem ser adequadas para uma família com crianças e adolescentes (idades entre 8 e 14 anos) e escritas em português do Brasil. Apresente cada curiosidade como um item de uma lista (ex: - Curiosidade 1...).`;
  return generateText(prompt);
};

export const suggestKidActivities = async (
  morningPlan: string,
  afternoonPlan: string,
  eveningPlan: string
): Promise<string> => {
  if (!ai) return "Serviço de IA indisponível.";
  const prompt = `Considerando o seguinte plano para um dia em Paris: Manhã - "${morningPlan}"; Tarde - "${afternoonPlan}"; Noite - "${eveningPlan}". Sugira 2 ou 3 atividades ou locais divertidos e adequados para crianças e adolescentes (entre 8 e 14 anos) que sejam próximos ou de fácil acesso a partir das áreas mencionadas. As sugestões devem ser diferentes das atividades já planejadas e apresentadas em português do Brasil, em formato de lista com marcadores (bullet points). Para cada sugestão, adicione uma breve justificativa (1-2 frases) do porquê seria interessante para essa faixa etária.`;
  return generateText(prompt);
};

export const describeFrenchDish = async (dishName: string): Promise<string> => {
  if (!ai) return "Serviço de IA indisponível.";
  const prompt = `Descreva o prato francês "${dishName}" em português do Brasil. Inclua seus ingredientes principais, uma breve história ou origem (se conhecida), e como ele é tipicamente servido ou apreciado. A descrição deve ser informativa e apetitosa, formatada como parágrafos de texto simples.`;
  return generateText(prompt);
};

export const isGeminiAvailable = (): boolean => !!ai;

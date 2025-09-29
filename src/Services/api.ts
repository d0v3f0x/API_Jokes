export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
  }
  
  /**
   * Busca uma piada aleatória da API fornecida.
   */
  export const fetchRandomJoke = async (): Promise<Joke> => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}`);
    }
    const data = await res.json();
    // Validação simples
    if (!data || typeof data.setup !== 'string' || typeof data.punchline !== 'string') {
      throw new Error('Resposta da API em formato inesperado');
    }
    return data as Joke;
  };
  
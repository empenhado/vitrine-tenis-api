import type { Produto, RespostaProduto } from '../types/produto';

export async function buscarTenis(): Promise<Produto[]> {
  try {
    const response = await fetch('https://dummyjson.com/products/category/mens-shoes');

    if (!response.ok) {
      throw new Error(`Status HTTP: ${response.status}`);
    }

    const dados: RespostaProduto = await response.json();
    
    // Abra o Console (F12) do navegador para ver o que aparece aqui!
    console.log('Dados recebidos da API:', dados);

    return dados.products ?? [];
  } catch (error) {
    console.error('Erro no fetch:', error);
    throw error;
  }
}
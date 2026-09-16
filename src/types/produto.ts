export interface Produto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface RespostaProduto {
  products: Produto[];
}

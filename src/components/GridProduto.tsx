import type { Produto } from "../types/produto";
import { ProductCard } from "./ProdutoCard";
import { TelaCarregamento } from "./TelaCarregamento";

interface ProductGridProps {
  produtos: Produto[];
  carregando: boolean;
}

export function ProductGrid({ produtos, carregando }: ProductGridProps) {
  if (carregando) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <TelaCarregamento key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {produtos.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

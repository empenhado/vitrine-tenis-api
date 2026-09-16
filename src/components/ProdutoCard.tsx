import type { Produto } from "../types/produto";

interface ProductCardProps {
  produto: Produto;
}

export function ProductCard({ produto }: ProductCardProps) {
  const precoFormatado = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(produto.price);

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="bg-card-bg aspect-square w-full flex items-center justify-center p-4 rounded-sm overflow-hidden">
        <img
          src={produto.thumbnail}
          alt={produto.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex justify-between items-start mt-3 gap-2">
        <h3 className="font-bold text-texto-principal text-sm leading-tight line-clamp-1">
          {produto.title}
        </h3>
        <span className="font-bold text-texto-principal text-sm">
          {precoFormatado}
        </span>
      </div>

      <p className="text-texto-mutado text-xs mt-1">Men's shoes</p>
    </div>
  );
}

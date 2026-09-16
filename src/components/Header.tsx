import { Search, User, ShoppingBag } from 'lucide-react';
import vector from "../assets/Vector.png";

export function Header() {
  return (
    <header className="w-full bg-white">
      {/* 1. Barra Superior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={vector} alt="Logo" className="h-5 sm:h-6 w-auto object-contain" />
        </div>

        {/* Ações e Ícones do Lucide */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Input de Busca */}
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              className="bg-search-bg text-sm text-texto-principal rounded-md pl-9 pr-4 py-2 w-40 sm:w-64 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Ícone de Perfil */}
          <button className="text-texto-principal hover:opacity-75 transition-opacity">
            <User className="w-6 h-6 stroke-[1.5]" />
          </button>

          {/* Ícone da Sacola */}
          <button className="text-texto-principal hover:opacity-75 transition-opacity">
            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* 2. Faixa Promocional */}
      <div className="bg-banner text-white text-xs font-semibold py-2.5 px-4 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center justify-center gap-6 sm:gap-12 min-w-max">
          <span>•</span>
          <span>Free shipping and refund</span>
          <span>•</span>
          <span>Expulsion 24h</span>
          <span>•</span>
          <span>-15% on the first purchase</span>
          <span>•</span>
        </div>
      </div>
    </header>
  );
}
import { useEffect, useState } from "react";
import type { Produto } from "./types/produto";
import { buscarTenis } from "./services/produtoApi";
import { ProductGrid } from "./components/GridProduto";
import { Header } from "./components/Header";

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        setCarregando(true);
        const dados = await buscarTenis();
        setProdutos(dados);
      } catch (err) {
        setErro(
          "Não foi possível carregar os tênis. Tente novamente mais tarde.",
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-banner text-white text-xs font-medium py-2.5 text-center tracking-wide">
        Free shipping and refund &nbsp;•&nbsp; Expulsion 24h &nbsp;•&nbsp; -15%
        on the first purchase
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-texto-principal">
            Lifestyle Sneakers
          </h1>
        </div>

        {erro ? (
          <div className="text-center py-16 text-red-500 font-semibold">
            {erro}
          </div>
        ) : (
          <ProductGrid produtos={produtos} carregando={carregando} />
        )}
      </main>
    </div>
  );
}

# Loja de Tênis

Catálogo de tênis desenvolvido com React, TypeScript, Vite e Tailwind CSS. Os
produtos são carregados da API pública [DummyJSON](https://dummyjson.com/).

## Pré-requisitos

- Node.js 20 ou superior
- npm
- Acesso à internet para carregar os produtos da API

## Como executar

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd loja-tenis
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Abra a URL exibida no terminal, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando           | Descrição                                                        |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run build`   | Verifica os tipos e gera a versão de produção em `dist/`.        |
| `npm run lint`    | Executa o Oxlint no código do projeto.                           |
| `npm run preview` | Serve localmente a versão já gerada em `dist/`.                  |

Para testar a versão de produção localmente:

```bash
npm run build
npm run preview
```

## Estrutura principal

```text
src/
├── components/  Componentes visuais da loja
├── services/    Comunicação com a API de produtos
├── styles/      Estilos globais e tema Tailwind
├── types/       Tipos TypeScript dos produtos
├── App.tsx      Componente principal da aplicação
└── main.tsx     Ponto de entrada do React
```

## API de produtos

O catálogo é obtido de `https://dummyjson.com/products/category/mens-shoes` no
arquivo `src/services/produtoApi.ts`. Caso a API esteja indisponível ou o
navegador esteja sem internet, a aplicação exibe uma mensagem de erro.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Lucide React
- Oxlint

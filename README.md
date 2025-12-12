# ✏️ Markdown Editor - Projeto Frontend

Um editor de Markdown desenvolvido em Next.js, permitindo visualizar a prévia em tempo real enquanto o usuário escreve.

## 🚀 Tecnologias Utilizadas 

- TypeScript
- React 
- Next.js
- Tailwind CSS
- Shadcn / Radix UI
- react-markdown

## 🗂️ Estrutura de Pastas

```
├── app
├── components
├── contexts
├── hooks
├── lib
├── public
├── services
├── types
├── validators
└── package.json
```

## ✨ Funcionalidades Implementadas

- CRUD de documentos Markdown no localStorage
- Editor com Preview Markdown
- Toolbar de Estilização
- Context API (para os documentos Markdown)
- Roteamento
- Autosave com debounce (tanto para título como conteúdo)
- Tema claro/escuro
- Atalhos de teclado (exibidos na toolbar)
- Componentização avançada da toolbar
- Renomear o documento diretamente pela lista
- Organização de pastas bem planejada
- Tipagem avançada com TypeScript
- Validação do título e do conteúdo
- Boas práticas de acessibilidade

## ⚙️ Instalação

### 1. Pré-requisitos

- NPM ou Yarn

### 2. Configurando o projeto

Clone o repositório:

```bash
git clone https://github.com/guighm/markdown-editor.git

cd markdown-editor
```

Instale as dependências:

```bash
npm install 
# ou 
yarn install
```

Inicie o front-end:

```bash
npm run dev 
# ou
yarn run dev
```

O front-end estará disponível em:

```
http://localhost:3000
```

## O que avaliar?

- Qualidade do código
- Boas práticas no React
- Uso de hooks introduzidos no React 19 (`use` e `useActionState`)
- Estrutura do Projeto

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center">
    <a href="https://github.com/guighm">
        <img src="https://avatars.githubusercontent.com/guighm" width="100px;" alt="Foto do Guilherme Moraes"/><br />
        <sub><b>Guilherme Moraes</b></sub>
        </a>
    </td>
  </tr>
</table>
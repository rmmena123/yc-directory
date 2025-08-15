
<img width="1800" height="520" alt="hero" src="https://github.com/user-attachments/assets/471e2baa-8781-43b8-aaed-62e313d03e99" />

# 📝 YC Directory

Uma plataforma desenvolvida com Next.js 15 onde empreendedores podem submeter suas ideias de startup para competições de pitch virtuais, navegar por outros pitches e ganhar visibilidade. O design, limpo e minimalista, garante uma experiência de usuário fluida e agradável. Foi desenvolvido durante o [curso de front-end do canal Javascript Mastery](https://www.youtube.com/watch?v=Zq5fmkH0T78) e modificado após a finalização do curso com ajustes de responsividade e documentação técnica.

---

## 🚀 Features

- 🚀 **API de Conteúdo em Tempo Real:** Exibe as ideias de startups mais recentes de forma dinâmica na página inicial, utilizando a API de Conteúdo do Sanity.

- 🔑 **Autenticação GitHub:**  Permite que os usuários façam login de forma simples e segura usando sua conta do GitHub.

- 📝 **Envio de Pitches:** Os usuários podem submeter suas ideias de startup, incluindo título, descrição, categoria e links de mídia (imagem ou vídeo).

- 🔍 **Visualização de Pitches:** Navegue pelas ideias submetidas com opções de filtro por categoria.

- 💡 **Página de Detalhes:** Clique em qualquer pitch para ver seus detalhes, com mídias e descrição em destaque.

- 👤 **Página de Perfil:** Os usuários podem visualizar a lista de pitches que submeteram.

- ⭐ **Escolhas do Editor:** Administradores podem destacar as melhores ideias de startup usando a funcionalidade "Escolhas do Editor", gerenciada via Sanity Studio.

- 👀 **Contador de Visualizações:** Acompanha o número de visualizações de cada pitch, em vez de usar um sistema de upvotes.

- 🔎 **Busca:** Funcionalidade de busca para encontrar e visualizar pitches de forma eficiente.

- ✨ **Design Minimalista:** Uma interface de usuário (UI) moderna e simples, com apenas as páginas essenciais para uma experiência de uso fácil e uma estética limpa.

- 🐞 **Report de Bugs**: Funcionalidade de report de bugs com log completo utilizando Sentry.

---

## 📁 Estrutura de Pastas

A estrutura de pastas do projeto foi organizada para manter o código modular e de fácil manutenção:

```bash
yc-directory/
├─ app              # Diretório principal das rotas da aplicação (App Router)
  ├─ (root)/        # Grupo das principais rotas da aplicação
  ├─ api/           # Autenticação com Github
  ├─ fonts/         # Fontes utilizadas na aplicação
  └─ studio/        # Rota de acesso ao CMS Sanity   
├─ components/      # Componentes reutilizáveis da aplicação
├─ hooks/           # Hooks reutilizáveis
├─ lib/             # Funções utilitárias
├─ public/          # Arquivos estáticos
└─ sanity/          # Configuração e lógica relacionadas à integração com o CMS Sanity
```

[Documentação técnica completa](https://rmmena123.notion.site/YC-Directory-2505a575c33f80cd8645ef856a17372e?pvs=74)

---

## ⚙️ Instalação e Configuração

Siga estes passos para configurar o projeto localmente em sua máquina.

#### 📋 Pré-requisitos

Certifique-se de ter os seguintes itens instalados em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (versão 20)
- [npm](https://www.npmjs.com/) (Node Package Manager)

#### 📂 Clonando o Repositório

```bash
git clone https://github.com/rmmena123/yc-directory.git
cd yc-directory
```

#### 📦 Instalação

Instale as dependências do projeto usando o npm:

```bash
npm install
```

#### ⚙️ Configuração das Variáveis de Ambiente

Crie um novo arquivo chamado .env.local na raiz do seu projeto e adicione o seguinte conteúdo:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Substitua os valores de exemplo pelas suas credenciais reais do Sanity.
Você pode obter essas credenciais criando uma conta e um novo projeto no site da Sanity.

#### 🚀 Executando o Projeto

```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador para visualizar o projeto.

---

## 🧰 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Um framework React que oferece renderização híbrida (estática e server-side), roteamento simplificado e otimizações de desempenho integradas, facilitando o desenvolvimento de aplicações web rápidas, escaláveis e otimizadas para SEO.

- **[TypeScript](https://www.typescriptlang.org/)**: Um superset do JavaScript que adiciona tipagem estática, fornecendo melhores ferramentas, qualidade de código e detecção de erros para desenvolvedores, tornando-o ideal para a construção de aplicações em larga escala.

- **[Sanity](https://www.sanity.io/)**: Um CMS headless flexível e personalizável que permite gerenciar conteúdo de forma estruturada, com API em tempo real e ferramentas para edição colaborativa, facilitando a integração com aplicações web e mobile.

- **[Sentry](https://sentry.io/)**: Uma plataforma de monitoramento de erros e desempenho que ajuda desenvolvedores a identificar, diagnosticar e corrigir problemas em tempo real, melhorando a estabilidade e a confiabilidade das aplicações.

- **[Shadcn](https://ui.shadcn.com/)**: Uma coleção de componentes de interface de usuário construídos com React e estilizados com Tailwind CSS, projetados para serem totalmente personalizáveis, garantindo consistência visual e agilidade no desenvolvimento de interfaces modernas.

- **[Tailwind CSS](https://tailwindcss.com/)**: Um framework CSS utility-first que permite aos desenvolvedores criar interfaces de usuário personalizadas aplicando classes de utilitários de baixo nível diretamente no HTML, otimizando o processo de design.

---

## 👨‍💻 Autor

Desenvolvido por [Rodrigo Mena](https://github.com/rmmena123)

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<br clear="right">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<div align="center">

<h1 align="center">📊 POKEMON-APP-ANGULAR</h1>

<p align="center">
Aplicativo interativo para consultar dados de , desenvolvido com Angular, Ionic e integrando a PokeAPI
</p>

<p align="center">
  <!-- License -->
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat" />
  </a>

  <!-- Último commit -->
  <a href="https://github.com/marcelonovello/pokemon-app-angular/commits/main">
    <img src="https://img.shields.io/github/last-commit/marcelonovello/pokemon-app-angular?style=flat" />
  </a>

  <!-- TypeScript -->
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
  </a>

</p>
</div>

<a id="visao-geral"></a>
## 🔎 Visão Geral

Este projeto implementa uma Pokédex digital completa usando Ionic 8 e Angular 18.
Permite que os usuários:

- 🔍 Pesquisar  via PokeAPI.
- 📋 Listar e explorar detalhes de cada , incluindo estatísticas, tipos e habilidades.
- ⭐ Favoritar  para acesso rápido.
- 🧩 Interface modular e escalável, seguindo boas práticas de desenvolvimento front-end.
- 📱 Design responsivo, totalmente otimizado para dispositivos móveis.  

<a id="tecnologias"></a>
## 💻 Tecnologias
<p>
  <img src="https://skillicons.dev/icons?i=angular,html,css,js,nodejs,ionic,capacitor" />
</p>
</div>

## 📑 Sumário

- 🔎 [Visão Geral](#visao-geral)
- 💻 [Tecnologias](#tecnologias)
- ✨ [Funcionalidades](#funcionalidades)
- 🏗 [Estrutura do Projeto](#estrutura-do-projeto)
- 🚀 [Começando](#comecando)
  - ⚙️ [Pré-requisitos](#pre-requisitos)
  - ⬇️ [Instalação](#instalacao)
  - 🛠️ [Uso](#uso)
  - 🧪 [Testes](#testes)
    - 🔧 [Resolução de Problemas](#resolucao-de-problemas)
- 🗺 [Roteiro do Projeto](#roteiro-do-projeto)
- 👥 [Contribuindo](#contribuindo)
- 📄 [Licença](#licenca)
- 📚 [Agradecimentos](#agradecimentos)

---
<a id="funcionalidades"></a>
<a id="funcionalidades"></a>
## ✨ Funcionalidades

-🔍 Pesquisar  por nome ou ID
- 📊 Visualizar estatísticas, tipos e habilidades detalhadas
- 📱 Design totalmente responsivo para dispositivos móveis e desktop
- ⚡ Suporte offline com service workers
- 🌐 Alimentado pela [PokeAPI](https://pokeapi.co/) oficial

<a id="estrutura-do-projeto"></a>
## 🏗 Estrutura do Projeto

```sh
└──📦 pokemon-app-angular/           # Pasta raiz do app Angular Pokémon
    ├── 📄 README.md                 # Documentação principal do projeto
    ├── 📄 DOCS-TECH.md              # Documentação técnica e detalhes de implementação
    ├── 📄 angular.json              # Configuração do Angular CLI
    ├── 📄 capacitor.config.ts       # Configuração do Capacitor para builds móveis
    ├── 📄 ionic.config.json         # Configuração do projeto Ionic
    ├── 📄 package.json              # Dependências Node.js e scripts do projeto
    ├── 📄 package-lock.json         # Versões exatas dos pacotes Node.js instalados
    ├── 📄 tsconfig.json             # Configuração global do TypeScript
    ├── 📄 tsconfig.app.json         # Configuração TypeScript específica do app Angular
    ├── 📂 src/                      # Pasta do código-fonte
    │   ├── 📂 app/                  # Módulo principal do app Angular
    │   │   ├── 📂 components/      # Componentes de UI reutilizáveis
    │   │   ├── 📂 pages/           # Páginas/telas do app
    │   │   ├── 📂 services/        # Serviços Angular (lógica de dados e API)
    │   │   ├── 📄 app.component.ts      # Componente raiz do app
    │   │   ├── 📄 app.module.ts         # Módulo principal, declara componentes e módulos
    │   │   └── 📄 app-routing.module.ts # Configuração das rotas do app
    │   ├── 📂 assets/               # Pasta de assets estáticos
    │   │   ├── 📂 images/           # Imagens usadas no app
    │   │   └── 📂 icons/            # Ícones do app
    │   ├── 📂 environments/        # Configurações de ambiente
    │   │   ├── 📄 environment.ts        # Ambiente padrão (desenvolvimento)
    │   │   └── 📄 environment.prod.ts   # Configurações do ambiente de produção
    │   └── 📄 index.html            # Arquivo HTML principal, ponto de entrada do app
    └── 📄 .gitignore                # Arquivos/pastas ignorados pelo Git

```

---

<a id="comecando"></a>
## 🚀 Começando

<a id="pre-requisitos"></a>
### ⚙️ Pré-requisitos

Antes de começar com o Pokémon app, verifique se o seu ambiente atende aos seguintes requisitos:

- [<img align="center" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" />](https://nodejs.org/)
- [<img align="center" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/) or [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white" />](https://yarnpkg.com/)
- [<img align="center" src="https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white" />](https://angular.io/cli)
- [<img align="center" src="https://img.shields.io/badge/Ionic-3880FF?style=flat&logo=ionic&logoColor=white" />](https://ionicframework.com/docs/cli)

<a id="instalacao"></a>
## ⬇️ Instalação

Instale o Pokémon app usando um dos métodos:

**Build a partir do código-fonte:**

1. Clone o repositório:
```sh
git clone https://github.com/marcelonovello/pokemon-app-angular.git
```

2. Navegue até o diretório do projeto:
```sh
cd pokemon-app-angular
```

3. Instale as dependências:
```sh
npm install
```

<a id="uso"></a>
## 🛠️ Uso
Execute o Micro-Frontends-Application usando o seguinte comando:<br>
```sh
ionic serve
```

<a id="testes"></a>
## 🧪 Testes
Execute os testes usando o seguinte comando:<br>
```sh
npm run test
```

<a id="resolucao-de-problemas"></a>
## 🔧 Resolução de Problemas

- ⚠️ **Se as portas já estiverem em uso** → Altere a porta em `.env` ou `docker-compose.yml`.  
- 🐛 **Se a PokeAPI falhar** → Verifique a URL da API ou se o serviço da API está online.  
  
---

<a id="roteiro-do-projeto"></a>
## 🗺 Roteiro do Projeto

- [X] **`Init`**: Inicializar a estrutura do projeto Angular 18 + Ionic 8 e configurar dependências principais.
- [X] **`Setup`**: Configurar TypeScript, módulos Angular, rotas e arquivos de ambiente.
- [X] **`Assets`**: Adicionar assets estáticos (imagens, ícones) e configurar a pasta de assets.
- [X] **`Components`**: Criar componentes de UI reutilizáveis para cards, listas e estatísticas de Pokémon.
- [ ] **`Pages`**: Construir páginas principais (lista da Pokédex, detalhes do Pokémon, página de favoritos).
- [ ] **`Services`**: Implementar serviços para consumir dados de Pokémon via PokeAPI.
- [ ] **`Favorites`**: Adicionar funcionalidade de favoritos com suporte a armazenamento local.
- [ ] **`Responsive`**: Garantir design totalmente responsivo para dispositivos móveis e desktops.
- [ ] **`Search`**: Implementar busca por nome ou ID usando a PokeAPI.
- [ ] **`Filters`**: Adicionar filtros por tipo, habilidades e outros critérios.
- [ ] **`Optimization`**: Otimizar performance do app, lazy loading e tamanho do bundle.
- [ ] **`Testing`**: Escrever testes unitários e de integração para componentes e serviços.
- [ ] **`Deploy`**: Preparar build para produção e publicar como PWA (Progressive Web App).
- [ ] **`Enhance`**: Melhorar UI/UX, documentação e experiência do desenvolvedor.

---

<a id="contribuindo"></a>
## 👥 Contribuindo

- **💬 [Participe das Discussões](https://github.com/marcelonovello/pokemon-app-angular/discussions)**: Compartilhe suas ideias, forneça feedback ou faça perguntas.
- **🐛 [Reportar Problemas](https://github.com/marcelonovello/pokemon-app-angular/issues)**: Envie bugs encontrados ou registre solicitações de novas funcionalidades para o projeto `pokemon-app-angular`.
- **💡 [Submeta Pull Requests](https://github.com/marcelonovello/pokemon-app-angular/blob/main/CONTRIBUTING.md)**: Analise PRs abertos e envie seus próprios PRs.

<details closed>
<summary>Diretrizes para Contribuição</summary>

1. **Fork do Repositório**: Comece fazendo um fork do repositório para sua conta no GitHub.
2. **Clone Localmente**: Clone o repositório forked para sua máquina usando um cliente git.
   ```sh
   git clone https://github.com/marcelonovello/pokemon-app-angular
   ```
3. **Crie uma Nova Branch**: Sempre trabalhe em uma nova branch, dando um nome descritivo.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Faça Suas Alterações**: Desenvolva e teste suas alterações localmente.
5. **Commit das Alterações**: Faça commit com uma mensagem clara descrevendo suas atualizações.
   ```sh
   git commit -m \'Implemented new feature x.\'
   ```
6. **Push para o github**: Envie as alterações para seu repositório forked.
   ```sh
   git push origin new-feature-x
   ```
7. **Submeta um Pull Request**: Crie um PR contra o repositório original. Descreva claramente as mudanças e suas motivações.
8. **Revisão**: Uma vez que o PR seja revisado e aprovado, ele será mergeado na branch principal. Parabéns pela contribuição!
</details>

<details closed>
<summary>Gráfico de Contribuidores</summary>
<br>
<p align="left">
   <a href="https://github.com{/marcelonovello/pokemon-app-angular/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=marcelonovello/pokemon-app-angular">
   </a>
</p>
</details>

---

<a id="licenca"></a>
## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<a id="agradecimentos"></a>
## 📚 Acknowledgments

- 🎮 [PokeAPI](https://pokeapi.co/) — por fornecer **dados sobre Pokémon**
- 📱 [Ionic Framework](https://ionicframework.com/) — pelos **componentes de interface**  
- 🅰️ [Angular](https://angular.io/) — pelo **framework de aplicação** 

---

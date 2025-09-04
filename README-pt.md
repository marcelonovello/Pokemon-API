[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<div align="center">

<h1 align="center">📊 POKEMON APP</h1>


Pokedex interativa desenvolvida com **Ionic 8** e **Angular 18**, consumindo a **PokeAPI** para exibir informacoes detalhadas sobre Pokemon. Aplicativo modular, escalavel e facil de manter.


<p align="center">
  <a href="https://ionicframework.com/">
    <img src="https://img.shields.io/badge/Ionic-3880FF?style=flat&logo=ionic&logoColor=white" />
  </a>
  <a href="https://angular.io/">
    <img src="https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat" />
  </a>
  <img src="https://img.shields.io/github/stars/marcelonovello/YouTube-Data-Connector?style=flat&logo=github" />
  <img src="https://img.shields.io/github/forks/marcelonovello/YouTube-Data-Connector?style=flat&logo=github" />
</p>
</div>

<a id="visao-geral"></a>
## 🔎 Visão Geral

O **Pokemon App** é uma aplicação modular que permite explorar dados detalhados sobre Pokémon, incluindo habilidades, tipos e estatísticas, de forma interativa e responsiva.  

> 💡 **Por que este projeto é relevante?**  
> Permite estudo prático de **Ionic**, **Angular** e consumo de **APIs externas**, além de demonstrar boas práticas de modularização e UI/UX.

### ✨ Funcionalidades Principais
- 🔍 Buscar Pokémon pelo nome ou ID
- 📊 Visualizar estatísticas detalhadas
- 🧬 Consultar tipos e habilidades
- 🌐 Navegação fluida entre diferentes gerações de Pokémon
- 📱 Interface responsiva para dispositivos móveis e desktop

---

## 📑 Sumário
- [Visão Geral](#visao-geral)
- [Demonstração](#demonstracao)
- [Tecnologias](#tecnologias-utilizadas)
- [Execução Local](#execucao-local)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Resolução de Problemas](#resolucao-de-problemas)
- [Testes](#testes)
- [Segurança](#seguranca)
- [Licença](#licenca)
- [Aprendizados](#aprendizados)
- [Como Contribuir](#como-contribuir)
- [Contato](#contato)

---

<a id="demonstracao"></a>
## 🎬 Demonstração

<p align="center">
  <img src="./assets/demo.gif" 
    alt="Demonstração do Pokemon App mostrando busca e detalhes dos Pokémon"  width="80%" />
</p>

💻 **Deploy ativo:**  
- App web: [https://pokemon-api-irfm.onrender.com/](https://pokemon-api-irfm.onrender.com/)

---

<a id="tecnologias-utilizadas"></a>
## 🛠️ Tecnologias Utilizadas

| Camada       | Tecnologias / Ferramentas                                      |
|--------------|---------------------------------------------------------------|
| Frontend     | [Ionic](https://ionicframework.com/), [Angular](https://angular.io/) |
| Backend/API  | [PokeAPI](https://pokeapi.co/)                                 |
| Ferramentas  | [npm](https://www.npmjs.com/), [Node.js](https://nodejs.org/) |

---

<a id="execucao-local"></a>
## 🚀 Execução Local

### ⚙️ Pré-requisitos
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
- ![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=flat&logo=ionic&logoColor=white)

### ⬇️ Instalação Rápida
1️⃣ Clone o repositório:
```bash
git clone https://github.com/marcelonovello/Pokemon-App.git
cd Pokemon-App
```
2️⃣ Instale as dependências:
```bash
npm install
```
3️⃣ Execute o aplicativo:
```bash
ionic serve
```
4️⃣ Acesse no navegador:
```bash
http://localhost:8100
```

---

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

<a id="resolucao-de-problemas"></a>

## 🔧 Resolução de Problemas
- ⚠️ **Porta já em uso**: Altere a porta padrão no ``ionic.config.json``.
- 🐛 **Erro na API**: Verifique a conectividade com a [PokeAPI](PokeAPI) e atualize URLs se necessário.

---

<a id="seguranca"></a>

## 🔒 Segurança
- 🔐 Mantenha dependências atualizadas com ``npm audit``.
- ❌ Não exponha chaves ou dados sensíveis no repositório.

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

<a id="licenca"></a>
## 📄 Licença

Licença MIT. Consulte o arquivo [LICENSE](LICENSE).

---

<a id="aprendizados"></a>
## 📚 Aprendizados
- ⚡ Integração com APIs externas (PokeAPI)
- 📱 Desenvolvimento mobile com Ionic
- 🛠️ Boas práticas de Angular e modularização
- 🌐 UI/UX responsiva
- 💻 Git e GitHub: commits, branches e versionamento

---

<a id="como-contribuir"></a>
## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo para colaborar com este projeto:

1. **Faça um Fork** do repositório.  
2. **Crie uma Branch** para sua feature ou correção:  
  ```bash
   git checkout -b minha-feature
  ```
3. Faça as alterações necessárias no código ou na documentação.
4. Confirme as mudanças (commits) com mensagens claras:
  ```bash
  git commit -m "Adiciona nova funcionalidade X"
  ```
5. Envie para seu Fork:
  ```bash
  git push origin minha-feature
  ```
6. Abra um Pull Request (PR) para a branch main deste repositório.
 ```bash
 💡 Dica: Antes de enviar o PR, verifique se o código segue os padrões definidos e se todos os testes passam.
 ```

---

<a id="contato"></a>
## 📬 Contato

- **Autor:** Marcelo Novello  
- **GitHub:** [marcelonovello](https://github.com/marcelonovello)  
- **LinkedIn:** [Marcelo Novello](https://www.linkedin.com/in/marcelo-novello/)

---

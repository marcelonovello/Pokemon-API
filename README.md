[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<div align="center">

<h1 align="center">📊 POKEMON APP</h1>

Interactive Pokedex developed with **Ionic 8** and **Angular 18**, consuming the **PokeAPI** to display detailed Pokémon information. Modular, scalable, and easy-to-maintain application.

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
  <img src="https://img.shields.io/github/stars/marcelonovello/Pokemon-API?style=flat&logo=github" />
  <img src="https://img.shields.io/github/forks/marcelonovello/Pokemon-API?style=flat&logo=github" />
</p>
</div>

---

<a id="overview"></a>
## 🔎 Overview

The **Pokemon App** is a modular application that allows users to explore detailed Pokémon data, including abilities, types, and stats, in an interactive and responsive way.

> 💡 **Why is this project relevant?**  
> Provides practical experience with **Ionic**, **Angular**, and consumption of **external APIs**, while demonstrating best practices in modularization and UI/UX.

### ✨ Key Features
- 🔍 Search Pokémon by name or ID
- 📊 View detailed stats
- 🧬 Explore types and abilities
- 🌐 Smooth navigation across different Pokémon generations
- 📱 Responsive interface for mobile and desktop

---

## 📑 Table of Contents
- [Overview](#overview)
- [Demo](#demo)
- [Technologies](#technologies-used)
- [Local Setup](#local-setup)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Testing](#testing)
- [Security](#security)
- [License](#license)
- [Learnings](#learnings)
- [How to Contribute](#how-to-contribute)
- [Contact](#contact)

---

<a id="demo"></a>
## 🎬 Demo

<p align="center">
  <img src="./src/assets/demo.gif" 
       alt="Pokemon App demo showing search and Pokémon details" 
       width="80%" />
</p>

💻 **Live Deploy:**  
- Frontend: [https://pokemon-api-irfm.onrender.com/](https://pokemon-api-irfm.onrender.com/)

---

<a id="technologies-used"></a>
## 🛠️ Technologies Used

| Layer       | Technologies / Tools                                      |
|------------|-----------------------------------------------------------|
| Frontend   | [Ionic](https://ionicframework.com/), [Angular](https://angular.io/) |
| Backend/API| [PokeAPI](https://pokeapi.co/)                             |
| Tools      | [npm](https://www.npmjs.com/), [Node.js](https://nodejs.org/) |

---

<a id="local-setup"></a>
## 🚀 Local Setup

### ⚙️ Prerequisites
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
- ![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=flat&logo=ionic&logoColor=white)

### ⬇️ Quick Installation
1️⃣ Clone the repository:
```bash
git clone https://github.com/marcelonovello/Pokemon-App.git
cd Pokemon-App

```
2️⃣ Install dependencies:
```sh
npm install
```
3️⃣ Run the app:
```sh
ionic serve
```
4️⃣ Open in browser:
```sh
http://localhost:8100
```

---

<a id="project-structure"></a>
## 🏗 Project Structure
```sh
└──📦 pokemon-app-angular/           # Root folder of the Angular Pokémon app
    ├── 📄 README.md                 # Main project documentation and overview
    ├── 📄 DOCS-TECH.md             # Technical documentation and implementation details
    ├── 📄 angular.json             # Angular CLI configuration file
    ├── 📄 capacitor.config.ts      # Capacitor config for mobile builds
    ├── 📄 ionic.config.json        # Ionic project configuration
    ├── 📄 package.json             # Node.js dependencies and scripts
    ├── 📄 package-lock.json        # Exact versions of installed Node.js packages
    ├── 📄 tsconfig.json            # TypeScript global configuration
    ├── 📄 tsconfig.app.json        # TypeScript config specific to the Angular app
    ├── 📂 src/                     # Source code folder
    │   ├── 📂 app/                 # Main Angular app module
    │   │   ├── 📂 components/     # Reusable UI components
    │   │   ├── 📂 pages/          # App pages/screens
    │   │   ├── 📂 services/       # Angular services (data and API logic)
    │   │   ├── 📄 app.component.ts      # Root app component
    │   │   ├── 📄 app.module.ts         # Main app module, declares components and modules
    │   │   └── 📄 app-routing.module.ts # App routes configuration
    │   ├── 📂 assets/              # Static assets folder
    │   │   ├── 📂 images/          # Images used in the app
    │   │   └── 📂 icons/           # App icons
    │   ├── 📂 environments/       # Environment configurations
    │   │   ├── 📄 environment.ts       # Default environment (development)
    │   │   └── 📄 environment.prod.ts  # Production environment settings
    │   └── 📄 index.html           # Main HTML file, app entry point
    └── 📄 .gitignore               # Files/folders ignored by Git
```

---

<a id="troubleshooting"></a>
## 🔧 Troubleshooting

- ⚠️ **Port already in use** → Change the default port in ``ionic.config.json``.
- 🐛 **API errors** → Check connectivity with [PokeAPI](https://pokeapi.co/) and update URLs if necessary.

---

<a id="security"></a>

## 🔒 Security
- 🔐 Keep dependencies updated using ``npm audit``.
- ❌ Do not expose keys or sensitive data in the repository.

---

<a id="roadmap"></a>
## 🗺 Roadmap

- [X] **`Init`**: Initialize Angular 18 + Ionic 8 project structure and configure core dependencies.
- [X] **`Setup`**: Configure TypeScript, Angular modules, routing, and environment files.
- [X] **`Assets`**: Add static assets (images, icons) and configure the assets folder.
- [X] **`Components`**: Create reusable UI components for Pokémon cards, lists, and stats.
- [ ] **`Pages`**: Build main pages (Pokédex list, Pokémon details, favorites page).
- [ ] **`Services`**: Implement API services to fetch Pokémon data via PokeAPI.
- [ ] **`Favorites`**: Add favorite Pokémon functionality with local storage support.
- [ ] **`Responsive`**: Ensure fully responsive design for mobile and desktop devices.
- [ ] **`Search`**: Implement search functionality by name or ID using PokeAPI.
- [ ] **`Filters`**: Add filtering by type, abilities, and other criteria.
- [ ] **`Optimization`**: Optimize app performance, lazy loading, and bundle size.
- [ ] **`Testing`**: Write unit and integration tests for components and services.
- [ ] **`Deploy`**: Prepare for production build and deploy as PWA (Progressive Web App).
- [ ] **`Enhance`**: Improve UI/UX, documentation, and developer experience.

![Progresso](https://img.shields.io/badge/Progress-27%25-brightgreen)

---

<a id="license"></a>

## 📄 License
MIT License. See the [LICENSE](LICENSE) file.

---

<a id="learnings"></a>
## 📚 Learnings
- ⚡ Integration with external APIs (PokeAPI)
- 📱 Mobile development with Ionic
- 🛠️ Best practices in Angular and modularization
- 🌐 Responsive UI/UX
- 💻 Git and GitHub: commits, branches, version control

---

<a id="how-to-contribute"></a>
## 🤝 How to Contribute

Contributions are welcome! Follow these steps:
1. **Fork this repository**.
2. **Create a branch** for your feature or fix:
```bash
   git checkout -b my-feature
```
3. Make your changes.
4. Commit with a clear message:
```bash
   git commit -m "Add feature X"
```
5. Push to your fork:
```bash
   git push origin my-feature
```
6. Open a Pull Request to main.
```bash
💡 Tip: Before submitting, ensure code follows standards and tests pass.
```

---

<a id="contact"></a>

## 📬 Contact
- **Author:** Marcelo Novello
- **GitHub:** [marcelonovello](https://github.com/marcelonovello)  
- **LinkedIn:** [Marcelo Novello](https://www.linkedin.com/in/marcelo-novello/)

---
[🇺🇸 English](./README.md)   |   [🇧🇷 Português](./README-pt.md)

<br clear="right">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<div align="center">

<h1 align="center">📊 POKEMON APP </h1>

<p align="center">
Interactive app for browsing Pokemon data, developed with Angular and Ionic, integrating the PokeAPI.
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

<a id="overview"></a>
## 📖 Overview
This project implements a complete digital Pokédex using Ionic 8 and Angular 18. It allows users to:

- 🔍 Search for Pokemon via the PokeAPI.
- 📋 List and explore details of each Pokemon, including stats, types, and abilities.
- ⭐ Favorite Pokemon for quick access.
- 🧩 Modular and scalable interface, following best front-end development practices.
- 📱 Responsive design, fully optimized for mobile devices.

<a id="tech-stack"></a>
## 🛠 Tech Stack
<p>
  <img src="https://skillicons.dev/icons?i=angular,html,css,js,nodejs,ionic,capacitor" />
</p>


## 📑 Table of Contents

- 📖 [Overview](#overview)
- 🛠 [Tech Stack](#tech-stack) 
- ✨ [Features](#features)
- 🏗 [Project Structure](#project-structure)   
- 🚀 [Getting Started](#getting-started)
  - 🛠 [Prerequisites](#prerequisites)
  - ⚙️ [Installation](#installation)
  - 🚀 [Usage](#usage)
  - 🧪 [Testing](#testing)
    - 🔧 [Troubleshooting](#troubleshooting) 
- 🗺 [Project Roadmap](#project-roadmap)  
- 👥 [Contributing](#contributing)  
- 📄 [License](#license)  
- 📚 [Acknowledgments](#acknowledgments)

---

<a id="features"></a>
## ✨ Features
- 🔍 Search Pokemon by **name** or **ID**  
- 📊 View detailed **stats**, **types**, and **abilities**  
- 📱 Fully **responsive design** for mobile and desktop  
- ⚡ **Offline support** with service workers  
- 🌐 Powered by the official [PokeAPI](https://pokeapi.co/) 

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

<a id="getting-started"></a>
## 🚀 Getting Started

<a id="prerequisites"></a>
### ⚙️ Prerequisites

Before getting started with the Pokemon app, make sure your environment meets the following requirements:

- [<img align="center" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" />](https://nodejs.org/)
- [<img align="center" src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" />](https://www.npmjs.com/) or [<img align="center" src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white" />](https://yarnpkg.com/)
- [<img align="center" src="https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white" />](https://angular.io/cli)
- [<img align="center" src="https://img.shields.io/badge/Ionic-3880FF?style=flat&logo=ionic&logoColor=white" />](https://ionicframework.com/docs/cli)

<a id="installation"></a>
## ⬇️ Installation

Install **Pokemon App Angular** using one of the following methods:

**Build from source:**

1. Clone the Pokemon App Angular repository:
```sh
git clone https://github.com/marcelonovello/pokemon-app-angular.git
```

2. Navigate to the project directory:
```sh
cd pokemon-app-angular
```

3. Install dependencies:
```sh
npm install
```

<a id="usage"></a>
## 🛠️ Usage
Start development server using the following command:<br>
```sh
ionic serve
```

<a id="testing"></a>
## 🧪 Testing
Run the test using the following command:<br>
```sh
npm run test
```

<a id="troubleshooting"></a>
## 🔧 Troubleshooting

- ⚠️ **If ports are already in use** → Change the port in `.env` or `docker-compose.yml`.  
- 🐛 **If PokeAPI fails** → Verify your API URL or check if the API service is online.  

---

<a id="project-roadmap"></a>
## 🗺 Project Roadmap

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


---

<a id="contributing"></a>
## 👥 Contributing

- **💬 [Join the Discussions](https://github.com/marcelonovello/pokemon-app-angular/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/marcelonovello/pokemon-app-angular/issues)**: Submit bugs found or log feature requests for the `pokemon-app-angular` project.
- **💡 [Submit Pull Requests](https://github.com/marcelonovello/pokemon-app-angular/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/marcelonovello/pokemon-app-angular
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m \'Implemented new feature x.\'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/marcelonovello/pokemon-app-angular/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=marcelonovello/pokemon-app-angular">
   </a>
</p>
</details>

---

<a id="license"></a>
## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

---

<a id="acknowledgments"></a>
## 📚 Acknowledgments

- 🎮 [PokeAPI](https://pokeapi.co/) — for providing the **Pokemon data**  
- 📱 [Ionic Framework](https://ionicframework.com/) — for the **UI components**  
- 🅰️ [Angular](https://angular.io/) — for the **application framework**  

---

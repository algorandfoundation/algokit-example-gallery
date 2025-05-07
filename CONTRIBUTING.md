# Contributing to AlgoKit Example Gallery

Thank you for considering contributing to the AlgoKit Example Gallery! This document outlines the process for contributing to this project.

## Table of Contents

- [Contributing to AlgoKit Example Gallery](#contributing-to-algokit-example-gallery)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
  - [Development Workflow](#development-workflow)
  - [Pull Request Process](#pull-request-process)
  - [Adding a New Example](#adding-a-new-example)
  - [Style Guidelines](#style-guidelines)
  - [License](#license)

## Code of Conduct

By participating in this project, you are expected to uphold a respectful and inclusive environment for all contributors.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork locally**
   ```bash
   git clone https://github.com/YOUR-USERNAME/algokit-example-gallery.git
   cd algokit-example-gallery
   ```
3. **Set up the development environment**
   ```bash
   npm install
   git submodule update --init --recursive
   ```

## Development Workflow

1. **Create a new branch** for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
2. **Start the development server**
   ```bash
   npm run dev
   ```
   This will start the local development server at `localhost:4321`

3. **Make your changes** and test them thoroughly

4. **Update templates** to the latest algokit-template main commit if needed
   ```bash
   npm run update-templates
   ```

    If you need a particular version
    ```bash
    git -C algokit-templates checkout <commit-hash>
    ```
   
   To update to the latest commit on a specific branch:
   ```bash
   # Checkout the desired branch
   git -C algokit-templates checkout <branch-name>
   # Pull latest changes from that branch
   git -C algokit-templates pull origin <branch-name>
   ```

5. **Commit your changes** with clear, descriptive commit messages
   ```bash
   git commit -m "Add feature: your feature description"
   ```

## Pull Request Process

1. **Push your changes** to your fork on GitHub
   ```bash
   git push origin feature/your-feature-name
   ```
   
2. **Create a Pull Request** from your fork to the main repository

3. **Describe your changes** in detail in the PR description

4. **Wait for review** - maintainers will review your PR and may request changes

5. **Address any review comments** and update your PR as needed

6. Once approved, a maintainer will merge your PR

## Adding a New Example

When adding a new example to the gallery:

1. Create a new directory in the appropriate section
2. Include a README.md with clear instructions
3. Add any necessary code, assets, and documentation
4. Update the main gallery index to include your example
5. Make sure your example follows all project standards and guidelines

## Style Guidelines

- Follow the existing code style in the project
- Use Astro components appropriately
- Maintain responsive design principles
- Write clear, concise comments and documentation
- Ensure accessibility standards are met

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for your contributions!

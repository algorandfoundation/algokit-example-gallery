# AlgoKit Examples Gallery

A gallery site showcasing example projects and templates for developing on the Algorand blockchain using [AlgoKit](https://developer.algorand.org/docs/get-started/algokit/). Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [DaisyUI](https://daisyui.com).

Live site: [examples.dev.algorand.co](https://examples.dev.algorand.co/)

## Overview

The gallery displays AlgoKit example projects across categories including smart contracts, frontend apps, fullstack applications, and notebooks. Each example links to its source code, README, and options to open in GitHub Codespaces or CodeSandbox.

Example data is sourced from the [algokit-templates](https://github.com/algorandfoundation/algokit-templates) repository, included as a git submodule.

## Getting Started

```sh
# Clone the repo with submodules
git clone --recurse-submodules https://github.com/algorandfoundation/algokit-example-gallery.git
cd algokit-example-gallery

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

## Commands

| Command                   | Action                                       |
| :------------------------ | :------------------------------------------- |
| `npm install`             | Install dependencies                         |
| `npm run dev`             | Start local dev server at `localhost:4321`    |
| `npm run build`           | Build production site to `./dist/`           |
| `npm run preview`         | Preview the production build locally         |
| `npm run update-templates`| Pull latest example templates from submodule |

# Localization-POC

Proof of concept for a localization template for web apps

## Dependency Overview

Overview of Major and minor dependencies imported in the project.

### TypeScript

TypeScript is an open source language built on top of JavaScript to provide static type defintions during development. The following related TypeScript dependencies are listed below:

* **typescript** - TypeScript is a language for application scale JavaScript development
* **@types/react** - TypeScript definitions for React
* **@types/react-dom** - TypeScript definitions for React (react-dom)
* **@types/react-router-dom** - TypeScript definitions for React Router
* **ts-node** - TypeScript execution environment and REPL for node.js, with source map support

### React

React is a JavaScript library for building user interfaces. The following related React dependencies are listed below:

* **react** - React is a JavaScript library for building user interfaces.
* **react-dom** - React package for working with the DOM.
* **react-router-dom** - DOM bindings for React Router

### Babel

Babel is a javascript compiler to convert our React and TypeScript code to JavaScript for the browser. The following related babel dependencies are listed below:

* **@babel/core** - Core Babel library
* **@babel/preset-env** - A Babel preset for each environment.
* **@babel/plugin-transform-runtime** - Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
* **@babel/preset-react** - Babel preset for all React plugins.
* **@babel/preset-typescript** - Babel preset for TypeScript.
* **@babel/runtime** - babel's modular runtime helpers

### Webpack

Webpack is a module bundler to combine javascript files for usage in the browser. The following related Webpack dependencies are listed below:

* **webpack** - Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.
* **webpack-cli** - CLI for webpack & friends
* **webpack-dev-server** - Serves a webpack app. Updates the browser on changes. Useful for rapid development.
* **ts-loader** - TypeScript loader for webpack
* **style-loader** - style loader module for webpack
* **css-loader** - css loader module for webpack
* **babel-loader** - babel's modular runtime helpers
* **source-map-loader** - extracts inlined source map and offers it to webpack

### ESLint

ESLint is a modern linter to statically analyze code and quickly find and fix problems. The following related ESLint dependencies are listed below:

* **eslint** - An AST-based pattern checker for JavaScript.
* **babel-eslint** - Custom parser for ESLint
* **@typescript-eslint/eslint-plugin** -TypeScript plugin for ESLint
* **@typescript-eslint/parser** - An ESLint custom parser which leverages TypeScript ESTree

### Tailwind CSS

Tailwind is a CSS framework used to provide utility classes for design systems.

* **tailwindcss** - A utility-first CSS framework for rapidly building custom user interfaces.

### Prettier

Prettier is an optimized code formatter to clean up code relative to the rules in place. The following related Prettier dependencies are listed below:

* **prettier** - Prettier is an opinionated code formatter\
* **prettier-eslint** - Formats your JavaScript using prettier followed by eslint --fix

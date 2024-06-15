# paket-app

paket-app is a packaging tool that creates a project structure and uses swc and rollup to compile and minify the code, making it compatible and fast for both Node.js and web applications.
Features

- Project structure: Creates an organised project structure ready to start developing.

- Compiling with swc: Uses swc to compile modern JavaScript code to a format compatible with older versions of Node.js and web browsers.

- Minification with Rollup: Use Rollup to package and minify code, reducing code size and improving performance.

- Cross-platform compatibility: Generates packages optimised for both Node.js and web applications.

## Installation

```bash
npm install -g paket-app
```

## Usage
Create a new project

```bash
create-paket-app project-name
```

This command will create a new folder with the necessary project structure and configuration files.

## Development

```bash
npm run dev
```

Run the development server with hot reload for faster development.
Compile for production

```bash
npm run build
```

Compiles and minifies code using swc and Rollup, generating two packages: one for Node.js and one for web applications.
License

This project is licensed under the

ISC.

Translated with DeepL.com (free version)
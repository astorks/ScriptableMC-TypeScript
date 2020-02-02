# ScriptableMC-TypeScript Example & Libraries
[![docs](https://img.shields.io/badge/ScriptableMC--Engine-v1.1.6-blue?style=for-the-badge)](https://github.com/astorks/ScriptableMC-Engine)
[![docs](https://img.shields.io/badge/Read_the_Docs-gray?style=for-the-badge)](https://astorks.github.io/ScriptableMC-TypeScript)
## Getting Started
- Install [NodeJS/NPM](https://nodejs.org/en/download/) or if you're on linux/macos you can install [GraalVM-CE](https://github.com/graalvm/graalvm-ce-builds/releases/latest) which includes a NodeJS runtime
- Clone or download and extract this repo `git clone https://github.com/astorks/ScriptableMC-TypeScript.git` and open the folder `cd ScriptableMC-TypeScript`
- Install the required NPM packages `npm install`


## How To Compile The Source
- Run the TypeScript compiler script `npm run compile` or `npm run watch`
- The compiled scripts will be placed in the `dist` folder
- Upload the compiled scripts to your minecraft server `scripts` folder and execute the `/jsrl` command ingame or restart the server to load the new scripts


## How To Generate Documentation
- Run the TypeDoc generator script `npm run docs`
- The generated documentation will be placed in the `docs` folder
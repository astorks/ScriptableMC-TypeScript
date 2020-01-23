# ScriptablePluginSourceTS
[![docs](https://img.shields.io/badge/ScriptablePluginEngine-v1.0.3-blue?style=for-the-badge)](https://github.com/astorks/ScriptablePluginEngine)
[![docs](https://img.shields.io/badge/Docs-v1.0.3-blue?style=for-the-badge)](https://astorks.github.io/ScriptablePluginSourceTS)
## Getting Started
- Clone or download and extract this repo `git clone https://github.com/astorks/ScriptablePluginSourceTS.git`
- Install [NodeJS/NPM](https://nodejs.org/en/download/) or if you're on linux/macos you can install [GraalVM-CE](https://github.com/graalvm/graalvm-ce-builds/releases/latest) which includes a NodeJS runtime
- Install the Typescript NPM package globally `npm install -g typescript`


## How To Compile
- Open the cloned repo folder
- Run the typescript compiler `tsc` or `tsc --watch`
- The compiled scripts will be placed in the `dist` folder
- Upload the compiled scripts to your minecraft server `scripts` folder and execute the `/jsrl` command ingame or restart the server to load the new scripts

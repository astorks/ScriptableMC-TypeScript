import { ScriptablePluginEngine } from "./lib/com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js";
import { TestPlugin } from './TestPlugin/main.js'

declare const engine: ScriptablePluginEngine;

engine.loadPlugin(TestPlugin);
// Load any additional plugins here...

engine.enableAllPlugins(); // Enable all loaded plugins 

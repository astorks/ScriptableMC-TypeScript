import { ScriptablePluginEngine } from "./lib/com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js";
import { TestPlugin } from './TestPlugin/main.js'

declare const engine: ScriptablePluginEngine;

engine.loadPlugin(TestPlugin);
// load any additional plugins here just call engine.loadPlugin with your plugins class

engine.enableAllPlugins(); // Build and enable all loaded plugins 

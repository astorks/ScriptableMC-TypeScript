import { ScriptablePluginEngine } from "./lib/com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js";
import { TestPlugin } from './TestPlugin/main.js'

declare const engine: ScriptablePluginEngine;


console.log("Loading minecraft plugins...");

engine.loadPlugin(TestPlugin);

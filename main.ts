import { ScriptablePluginEngine } from "./lib/com/pixlfox/scriptableplugin/core/ScriptablePluginEngine.js";
import { TestPlugin } from './TestPlugin/main.js'
declare const engine: ScriptablePluginEngine;


engine.loadPlugin(TestPlugin);
engine.enableAllPlugins();

import { ScriptablePluginContext } from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js';
import { JavaPlugin } from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import { Listener } from '../../../../org/bukkit/event/Listener.js';
export interface ScriptablePluginEngine extends Listener {
    loadPlugin(scriptableClass: any): ScriptablePluginContext;
    getRootScriptsFolder(): string;
    evalJs(source: string): any;
    eval(source: any): any;
    evalFile(filePath: string): any;
    getBootstrapPlugin(): JavaPlugin;
    getDebugEnabled(): boolean;
    enablePlugin(pluginContext: ScriptablePluginContext): void;
    enableAllPlugins(): void;
    disablePlugin(pluginContext: ScriptablePluginContext): void;
}
export declare class ScriptablePluginEngine {
    static get $javaClass(): any;
    constructor(arg0: JavaPlugin, arg1: string, arg2: boolean, arg3: number, arg4: any);
    constructor(bootstrapPlugin: JavaPlugin, rootScriptsFolder: string, debugEnabled: boolean);
    static access$setInst$cp(value: ScriptablePluginEngine): void;
    static access$getInst$cp(): ScriptablePluginEngine;
}

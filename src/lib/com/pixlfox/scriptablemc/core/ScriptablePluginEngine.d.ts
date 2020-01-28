import { JavaPlugin } from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import { ScriptablePluginContext } from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js';
import { Listener } from '../../../../org/bukkit/event/Listener.js';
export interface ScriptablePluginEngine extends Listener {
    getBootstrapPlugin(): JavaPlugin;
    getDebugEnabled(): boolean;
    enableAllPlugins(): void;
    enablePlugin(pluginContext: ScriptablePluginContext): void;
    disablePlugin(pluginContext: ScriptablePluginContext): void;
    getRootScriptsFolder(): string;
    eval(source: any): any;
    evalFile(filePath: string): any;
    evalJs(source: string): any;
    loadPlugin(scriptableClass: any): ScriptablePluginContext;
}
export declare class ScriptablePluginEngine {
    static get $javaClass(): any;
    constructor(bootstrapPlugin: JavaPlugin, rootScriptsFolder: string, debugEnabled: boolean);
    constructor(arg0: JavaPlugin, arg1: string, arg2: boolean, arg3: number, arg4: any);
    static access$getInst$cp(): ScriptablePluginEngine;
    static access$setInst$cp(value: ScriptablePluginEngine): void;
}

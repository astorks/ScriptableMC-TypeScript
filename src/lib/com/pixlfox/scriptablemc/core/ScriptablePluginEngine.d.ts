import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import Listener from '../../../../org/bukkit/event/Listener.js';
import ScriptablePluginContext from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js';
export default interface ScriptablePluginEngine extends Listener {
    getBootstrapPlugin(): JavaPlugin;
    getDebugEnabled(): boolean;
    eval(source: any): any;
    evalFile(filePath: string): any;
    evalFile(scriptFile: any): any;
    evalJs(source: string): any;
    evalCommandSenderJs(source: string, sender: CommandSender): any;
    loadPlugin(scriptableClass: any): ScriptablePluginContext;
    enableAllPlugins(): void;
    enablePlugin(pluginContext: ScriptablePluginContext): void;
    disablePlugin(pluginContext: ScriptablePluginContext): void;
    getRootScriptsFolder(): string;
    getExtractLibs(): boolean;
}
export default class ScriptablePluginEngine {
    static get $javaClass(): any;
    constructor(bootstrapPlugin: JavaPlugin, rootScriptsFolder: string, debugEnabled: boolean, extractLibs: boolean);
    constructor(arg0: JavaPlugin, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: any);
    static access$getInst$cp(): ScriptablePluginEngine;
    static access$setInst$cp(value: ScriptablePluginEngine): void;
}

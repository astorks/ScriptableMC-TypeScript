import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import Listener from '../../../../org/bukkit/event/Listener.js';
import ScriptablePluginContext from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js';
export default interface ScriptablePluginEngine extends Listener {
    getBootstrapPlugin(): JavaPlugin;
    getDebugEnabled(): boolean;
    evalCommandSenderJs(source: string, sender: CommandSender): any;
    getRootScriptsFolder(): string;
    evalJs(source: string): any;
    loadPlugin(scriptableClass: any): ScriptablePluginContext;
    enablePlugin(pluginContext: ScriptablePluginContext): void;
    disablePlugin(pluginContext: ScriptablePluginContext): void;
    evalFile(filePath: string): any;
    evalFile(scriptFile: any): any;
    enableAllPlugins(): void;
    eval(source: any): any;
}
export default class ScriptablePluginEngine {
    static get $javaClass(): any;
    constructor(bootstrapPlugin: JavaPlugin, rootScriptsFolder: string, debugEnabled: boolean);
    constructor(arg0: JavaPlugin, arg1: string, arg2: boolean, arg3: number, arg4: any);
    static access$getInst$cp(): ScriptablePluginEngine;
    static access$setInst$cp(value: ScriptablePluginEngine): void;
}

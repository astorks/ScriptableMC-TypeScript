import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import File from '../../../../java/io/File.js';
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import Listener from '../../../../org/bukkit/event/Listener.js';
import ScriptablePluginContext from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js';
export default interface ScriptablePluginEngine extends Listener {
    disablePlugin(pluginContext: ScriptablePluginContext): void;
    enablePlugin(pluginContext: ScriptablePluginContext): void;
    getExtractLibs(): boolean;
    loadPlugin(scriptableClass: any): ScriptablePluginContext;
    evalFile(filePath: string): any;
    evalFile(scriptFile: File): any;
    eval(source: any): any;
    enableAllPlugins(): void;
    evalJs(source: string): any;
    getBootstrapPlugin(): JavaPlugin;
    getDebugEnabled(): boolean;
    evalCommandSenderJs(source: string, sender: CommandSender): any;
    getRootScriptsFolder(): string;
}
export default class ScriptablePluginEngine {
    static get $javaClass(): any;
    constructor(bootstrapPlugin: JavaPlugin, rootScriptsFolder: string, debugEnabled: boolean, extractLibs: boolean);
    constructor(arg0: JavaPlugin, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: any);
    static access$setInst$cp(value: ScriptablePluginEngine): void;
    static access$getInst$cp(): ScriptablePluginEngine;
}

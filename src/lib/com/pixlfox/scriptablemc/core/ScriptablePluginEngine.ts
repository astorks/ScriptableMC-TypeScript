declare var Java: any;
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import File from '../../../../java/io/File.js'
import InventoryManager from '../../../../fr/minuskube/inv/InventoryManager.js'
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import Listener from '../../../../org/bukkit/event/Listener.js'
import ScriptablePluginContext from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js'

export default interface ScriptablePluginEngine extends Listener {
	getDebugEnabled(): boolean;
	getBootstrapPlugin(): JavaPlugin;
	getPluginVersion(): string;
	eval(source: any): any;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
	enableAllPlugins(): void;
	evalFile(filePath: string): any;
	evalFile(scriptFile: File): any;
	evalJs(source: string): any;
	evalCommandSenderJs(source: string, sender: CommandSender): any;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	getRootScriptsFolder(): string;
	getExtractLibs(): boolean;
	getVersionCheck(): boolean;
}

export default class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
	}
	constructor(bootstrapPlugin: JavaPlugin, rootScriptsFolder: string, debugEnabled: boolean, extractLibs: boolean, versionCheck: boolean);
	constructor(arg0: JavaPlugin, arg1: string, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: any);
	constructor(...args: any[]) {
		return new ScriptablePluginEngine.$javaClass(...args);
	}
	public static access$getInst$cp(): ScriptablePluginEngine;
	public static access$getInst$cp(...args: any[]): any {
		return ScriptablePluginEngine.$javaClass.access$getInst$cp(...args);
	}
	public static access$setInst$cp(value: ScriptablePluginEngine): void;
	public static access$setInst$cp(...args: any[]): any {
		return ScriptablePluginEngine.$javaClass.access$setInst$cp(...args);
	}
}


declare var Java: any;
import CommandSender from '../../../../org/bukkit/command/CommandSender.js'
import File from '../../../../java/io/File.js'
import InventoryManager from '../../../../fr/minuskube/inv/InventoryManager.js'
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import ScriptablePluginContext from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js'

export default interface ScriptablePluginEngine {
	close(): void;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	enableAllPlugins(): void;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	eval(source: any): any;
	eval(source: string): any;
	evalCommandSender(source: string, sender: CommandSender): any;
	evalFile(scriptFile: File): any;
	evalFile(filePath: string): any;
	getBootstrapPlugin(): JavaPlugin;
	getDebugEnabled(): boolean;
	getGlobalBindings(): any;
	getGraalContext(): any;
	getInventoryManager(): InventoryManager;
	getPluginVersion(): string;
	getScriptablePlugins(): Array<ScriptablePluginContext>;
	loadAllHelperClasses(): void;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
	start(): void;
}

export default class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
	}

	constructor();
	constructor(...args: any[]) {
		return new ScriptablePluginEngine.$javaClass(...args);
	}

	public static access$getPreLoadClasses$cp(): Array<string>;
	public static access$getPreLoadClasses$cp(...args: any[]): any {
		return ScriptablePluginEngine.$javaClass.access$getPreLoadClasses$cp(...args);
	}

}


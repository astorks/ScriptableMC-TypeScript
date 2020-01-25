declare var Java: any;
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {ScriptablePluginContext} from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js'
import {InventoryManager} from '../../../../fr/minuskube/inv/InventoryManager.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginEngine extends Listener {
	getDebugEnabled(): boolean;
	getBootstrapPlugin(): JavaPlugin;
	eval(source: any): any;
	evalFile(filePath: string): any;
	evalJs(source: string): any;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
	enableAllPlugins(): void;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	getRootServerFolder(): string;
	setDebugEnabled(value: boolean): void;
}

export class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
	}
	constructor(bootstrapPlugin: JavaPlugin, rootServerFolder: string);
	constructor(arg0: JavaPlugin, arg1: string, arg2: number, arg3: any);
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


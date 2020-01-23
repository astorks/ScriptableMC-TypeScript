declare var Java: any;
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {ScriptablePluginContext} from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js'
import {InventoryManager} from '../../../../fr/minuskube/inv/InventoryManager.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginEngine extends Listener {
	getBootstrapPlugin(): JavaPlugin;
	getDebugEnabled(): boolean;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
	setDebugEnabled(value: boolean): void;
	enableAllPlugins(): void;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	eval(source: any): any;
	evalJs(source: string): any;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
	getRootServerFolder(): string;
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
}

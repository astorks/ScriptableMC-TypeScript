declare var Java: any;
import {InventoryManager} from '../../../../fr/minuskube/inv/InventoryManager.js'
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {ScriptablePluginContext} from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginContext.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginEngine extends Listener {
	getRootServerFolder(): string;
	getDebugEnabled(): boolean;
	getBootstrapPlugin(): JavaPlugin;
	setDebugEnabled(value: boolean): void;
	eval(source: any): any;
	evalJs(source: string): any;
	loadPlugin(scriptableClass: any): ScriptablePluginContext;
	enableAllPlugins(): void;
	enablePlugin(pluginContext: ScriptablePluginContext): void;
	disablePlugin(pluginContext: ScriptablePluginContext): void;
}

export class ScriptablePluginEngine {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
	}
	constructor(arg0: JavaPlugin, arg1: string, arg2: number, arg3: any);
	constructor(bootstrapPlugin: JavaPlugin, rootServerFolder: string);
	constructor(...args: any[]) {
		return new ScriptablePluginEngine.$javaClass(...args);
	}
}


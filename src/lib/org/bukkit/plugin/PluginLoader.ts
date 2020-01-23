declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'

export interface PluginLoader {
	enablePlugin(plugin: Plugin): void;
	disablePlugin(plugin: Plugin): void;
	loadPlugin(file: any): Plugin;
	createRegisteredListeners(listener: Listener, plugin: Plugin): any;
	getPluginFileFilters(): Array<any>;
	getPluginDescription(file: any): PluginDescriptionFile;
}

export class PluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoader');
	}
}

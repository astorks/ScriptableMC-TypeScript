declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'

export interface PluginLoader {
	loadPlugin(file: any): Plugin;
	enablePlugin(plugin: Plugin): void;
	disablePlugin(plugin: Plugin): void;
	getPluginFileFilters(): Array<any>;
	getPluginDescription(file: any): PluginDescriptionFile;
	createRegisteredListeners(listener: Listener, plugin: Plugin): any;
}

export class PluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoader');
	}
}


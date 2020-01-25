declare var Java: any;
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {PluginDescriptionFile} from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'

export interface PluginLoader {
	loadPlugin(arg0: any): Plugin;
	enablePlugin(arg0: Plugin): void;
	disablePlugin(arg0: Plugin): void;
	getPluginDescription(arg0: any): PluginDescriptionFile;
	getPluginFileFilters(): Array<any>;
	createRegisteredListeners(arg0: Listener, arg1: Plugin): any;
}

export class PluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoader');
	}
}


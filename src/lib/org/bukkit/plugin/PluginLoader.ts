declare var Java: any;
import File from '../../../java/io/File.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js'

export default interface PluginLoader {
	loadPlugin(arg0: File): Plugin;
	enablePlugin(arg0: Plugin): void;
	disablePlugin(arg0: Plugin): void;
	getPluginFileFilters(): Array<any>;
	createRegisteredListeners(arg0: Listener, arg1: Plugin): any;
	getPluginDescription(arg0: File): PluginDescriptionFile;
}

export default class PluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLoader');
	}
}


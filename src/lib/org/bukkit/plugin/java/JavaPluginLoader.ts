declare var Java: any;
import File from '../../../../java/io/File.js'
import Listener from '../../../../org/bukkit/event/Listener.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js'
import Server from '../../../../org/bukkit/Server.js'

export default interface JavaPluginLoader extends PluginLoader {
	createRegisteredListeners(listener: Listener, plugin: Plugin): any;
	disablePlugin(plugin: Plugin): void;
	enablePlugin(plugin: Plugin): void;
	getPluginDescription(file: File): PluginDescriptionFile;
	getPluginFileFilters(): Array<any>;
	loadPlugin(file: File): Plugin;
}

export default class JavaPluginLoader {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.java.JavaPluginLoader');
	}

	constructor(instance: Server);
	constructor(...args: any[]) {
		return new JavaPluginLoader.$javaClass(...args);
	}

	public static get pluginParentTimer(): any {
		return JavaPluginLoader.$javaClass.pluginParentTimer;
	}

}


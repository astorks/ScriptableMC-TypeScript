import File from '../../../../java/io/File.js';
import Listener from '../../../../org/bukkit/event/Listener.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js';
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js';
import Server from '../../../../org/bukkit/Server.js';
export default interface JavaPluginLoader extends PluginLoader {
    disablePlugin(plugin: Plugin): void;
    enablePlugin(plugin: Plugin): void;
    loadPlugin(file: File): Plugin;
    getPluginDescription(file: File): PluginDescriptionFile;
    getPluginFileFilters(): Array<any>;
    createRegisteredListeners(listener: Listener, plugin: Plugin): any;
}
export default class JavaPluginLoader {
    static get $javaClass(): any;
    constructor(instance: Server);
    static get pluginParentTimer(): any;
}
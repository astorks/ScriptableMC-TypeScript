import File from '../../../java/io/File.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js';
export default interface PluginLoader {
    disablePlugin(arg0: Plugin): void;
    enablePlugin(arg0: Plugin): void;
    loadPlugin(arg0: File): Plugin;
    getPluginDescription(arg0: File): PluginDescriptionFile;
    getPluginFileFilters(): Array<any>;
    createRegisteredListeners(arg0: Listener, arg1: Plugin): any;
}
export default class PluginLoader {
    static get $javaClass(): any;
}

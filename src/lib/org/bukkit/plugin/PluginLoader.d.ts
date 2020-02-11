import File from '../../../java/io/File.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js';
export default interface PluginLoader {
    loadPlugin(arg0: File): Plugin;
    enablePlugin(arg0: Plugin): void;
    disablePlugin(arg0: Plugin): void;
    getPluginFileFilters(): Array<any>;
    getPluginDescription(arg0: File): PluginDescriptionFile;
    createRegisteredListeners(arg0: Listener, arg1: Plugin): any;
}
export default class PluginLoader {
    static get $javaClass(): any;
}

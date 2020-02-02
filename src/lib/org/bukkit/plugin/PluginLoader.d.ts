import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js';
export default interface PluginLoader {
    loadPlugin(arg0: any): Plugin;
    enablePlugin(arg0: Plugin): void;
    disablePlugin(arg0: Plugin): void;
    getPluginDescription(arg0: any): PluginDescriptionFile;
    getPluginFileFilters(): Array<any>;
    createRegisteredListeners(arg0: Listener, arg1: Plugin): any;
}
export default class PluginLoader {
    static get $javaClass(): any;
}

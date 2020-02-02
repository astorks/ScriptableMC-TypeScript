import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PluginIdentifiableCommand {
    getPlugin(): Plugin;
}
export default class PluginIdentifiableCommand {
    static get $javaClass(): any;
}

import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
export interface PluginIdentifiableCommand {
    getPlugin(): Plugin;
}
export declare class PluginIdentifiableCommand {
    static get $javaClass(): any;
}

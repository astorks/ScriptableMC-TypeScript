import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PluginCommandYamlParser {
}
export default class PluginCommandYamlParser {
    static get $javaClass(): any;
    constructor();
    static parse(plugin: Plugin): any;
}

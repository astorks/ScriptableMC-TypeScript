import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginEvent from '../../../../org/bukkit/event/server/PluginEvent.js';
export default interface PluginEnableEvent extends PluginEvent {
    getHandlers(): HandlerList;
    getPlugin(): Plugin;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PluginEnableEvent {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
    static getHandlerList(): HandlerList;
}

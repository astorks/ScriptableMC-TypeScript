import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import ServerEvent from '../../../../org/bukkit/event/server/ServerEvent.js';
export default interface PluginEvent extends ServerEvent {
    getPlugin(): Plugin;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PluginEvent {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
}

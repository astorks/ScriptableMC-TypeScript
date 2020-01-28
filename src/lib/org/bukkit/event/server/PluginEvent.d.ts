import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ServerEvent } from '../../../../org/bukkit/event/server/ServerEvent.js';
export interface PluginEvent extends ServerEvent {
    getPlugin(): Plugin;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PluginEvent {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
}

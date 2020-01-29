import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
import { PluginEvent } from '../../../../org/bukkit/event/server/PluginEvent.js';
export interface PluginEnableEvent extends PluginEvent {
    getHandlers(): HandlerList;
    getPlugin(): Plugin;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PluginEnableEvent {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
    static getHandlerList(): HandlerList;
}

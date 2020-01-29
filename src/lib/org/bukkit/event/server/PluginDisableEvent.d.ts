import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Plugin } from '../../../../org/bukkit/plugin/Plugin.js';
import { PluginEvent } from '../../../../org/bukkit/event/server/PluginEvent.js';
export interface PluginDisableEvent extends PluginEvent {
    getHandlers(): HandlerList;
    getPlugin(): Plugin;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PluginDisableEvent {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
    static getHandlerList(): HandlerList;
}

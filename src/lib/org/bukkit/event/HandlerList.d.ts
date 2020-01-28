import { Listener } from '../../../org/bukkit/event/Listener.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { RegisteredListener } from '../../../org/bukkit/plugin/RegisteredListener.js';
export interface HandlerList {
    unregister(listener: RegisteredListener): void;
    unregister(listener: Listener): void;
    unregister(plugin: Plugin): void;
    registerAll(listeners: any): void;
    getRegisteredListeners(): Array<RegisteredListener>;
    bake(): void;
    register(listener: RegisteredListener): void;
}
export declare class HandlerList {
    static get $javaClass(): any;
    constructor();
    static unregisterAll(listener: Listener): void;
    static unregisterAll(): void;
    static unregisterAll(plugin: Plugin): void;
    static getRegisteredListeners(plugin: Plugin): any;
    static bakeAll(): void;
    static getHandlerLists(): any;
}

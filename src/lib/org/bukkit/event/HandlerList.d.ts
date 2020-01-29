import { RegisteredListener } from '../../../org/bukkit/plugin/RegisteredListener.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Listener } from '../../../org/bukkit/event/Listener.js';
export interface HandlerList {
    register(listener: RegisteredListener): void;
    unregister(plugin: Plugin): void;
    unregister(listener: Listener): void;
    unregister(listener: RegisteredListener): void;
    registerAll(listeners: any): void;
    bake(): void;
    getRegisteredListeners(): Array<RegisteredListener>;
}
export declare class HandlerList {
    static get $javaClass(): any;
    constructor();
    static unregisterAll(): void;
    static unregisterAll(listener: Listener): void;
    static unregisterAll(plugin: Plugin): void;
    static bakeAll(): void;
    static getHandlerLists(): any;
    static getRegisteredListeners(plugin: Plugin): any;
}

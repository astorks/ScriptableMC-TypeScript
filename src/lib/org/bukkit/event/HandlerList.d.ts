import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredListener from '../../../org/bukkit/plugin/RegisteredListener.js';
export default interface HandlerList {
    register(listener: RegisteredListener): void;
    unregister(plugin: Plugin): void;
    unregister(listener: RegisteredListener): void;
    unregister(listener: Listener): void;
    registerAll(listeners: any): void;
    bake(): void;
    getRegisteredListeners(): Array<RegisteredListener>;
}
export default class HandlerList {
    static get $javaClass(): any;
    constructor();
    static unregisterAll(listener: Listener): void;
    static unregisterAll(plugin: Plugin): void;
    static unregisterAll(): void;
    static getHandlerLists(): any;
    static bakeAll(): void;
    static getRegisteredListeners(plugin: Plugin): any;
}

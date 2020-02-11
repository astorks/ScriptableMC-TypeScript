import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredListener from '../../../org/bukkit/plugin/RegisteredListener.js';
export default interface HandlerList {
    register(listener: RegisteredListener): void;
    getRegisteredListeners(): Array<RegisteredListener>;
    unregister(plugin: Plugin): void;
    unregister(listener: RegisteredListener): void;
    unregister(listener: Listener): void;
    bake(): void;
    registerAll(listeners: any): void;
}
export default class HandlerList {
    static get $javaClass(): any;
    constructor();
    static getRegisteredListeners(plugin: Plugin): any;
    static unregisterAll(plugin: Plugin): void;
    static unregisterAll(): void;
    static unregisterAll(listener: Listener): void;
    static bakeAll(): void;
    static getHandlerLists(): any;
}

import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredListener from '../../../org/bukkit/plugin/RegisteredListener.js';
export default interface HandlerList {
    unregister(listener: RegisteredListener): void;
    unregister(plugin: Plugin): void;
    unregister(listener: Listener): void;
    bake(): void;
    getRegisteredListeners(): Array<RegisteredListener>;
    registerAll(listeners: any): void;
    register(listener: RegisteredListener): void;
}
export default class HandlerList {
    static get $javaClass(): any;
    constructor();
    static unregisterAll(plugin: Plugin): void;
    static unregisterAll(): void;
    static unregisterAll(listener: Listener): void;
    static bakeAll(): void;
    static getRegisteredListeners(plugin: Plugin): any;
    static getHandlerLists(): any;
}

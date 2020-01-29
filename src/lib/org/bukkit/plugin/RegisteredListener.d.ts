import { EventPriority } from '../../../org/bukkit/event/EventPriority.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Listener } from '../../../org/bukkit/event/Listener.js';
import { Event } from '../../../org/bukkit/event/Event.js';
import { EventExecutor } from '../../../org/bukkit/plugin/EventExecutor.js';
export interface RegisteredListener {
    getPriority(): EventPriority;
    getPlugin(): Plugin;
    getListener(): Listener;
    callEvent(event: Event): void;
    isIgnoringCancelled(): boolean;
}
export declare class RegisteredListener {
    static get $javaClass(): any;
    constructor(listener: Listener, executor: EventExecutor, priority: EventPriority, plugin: Plugin, ignoreCancelled: boolean);
}

import Event from '../../../org/bukkit/event/Event.js';
import EventExecutor from '../../../org/bukkit/plugin/EventExecutor.js';
import EventPriority from '../../../org/bukkit/event/EventPriority.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface RegisteredListener {
    getPlugin(): Plugin;
    getListener(): Listener;
    callEvent(event: Event): void;
    isIgnoringCancelled(): boolean;
    getPriority(): EventPriority;
}
export default class RegisteredListener {
    static get $javaClass(): any;
    constructor(listener: Listener, executor: EventExecutor, priority: EventPriority, plugin: Plugin, ignoreCancelled: boolean);
}

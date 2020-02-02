import Event from '../../../org/bukkit/event/Event.js';
import EventExecutor from '../../../org/bukkit/plugin/EventExecutor.js';
import EventPriority from '../../../org/bukkit/event/EventPriority.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredListener from '../../../org/bukkit/plugin/RegisteredListener.js';
export default interface TimedRegisteredListener extends RegisteredListener {
    reset(): void;
    getCount(): number;
    callEvent(event: Event): void;
    getTotalTime(): number;
    hasMultiple(): boolean;
    getEventClass(): any;
    getPriority(): EventPriority;
    getPlugin(): Plugin;
    getListener(): Listener;
    isIgnoringCancelled(): boolean;
}
export default class TimedRegisteredListener {
    static get $javaClass(): any;
    constructor(pluginListener: Listener, eventExecutor: EventExecutor, eventPriority: EventPriority, registeredPlugin: Plugin, listenCancelled: boolean);
}

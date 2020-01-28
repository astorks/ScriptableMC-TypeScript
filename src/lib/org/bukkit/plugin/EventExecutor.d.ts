import { Listener } from '../../../org/bukkit/event/Listener.js';
import { Event } from '../../../org/bukkit/event/Event.js';
export interface EventExecutor {
    execute(arg0: Listener, arg1: Event): void;
}
export declare class EventExecutor {
    static get $javaClass(): any;
}

import Event from '../../../org/bukkit/event/Event.js';
import Listener from '../../../org/bukkit/event/Listener.js';
export default interface EventExecutor {
    execute(arg0: Listener, arg1: Event): void;
}
export default class EventExecutor {
    static get $javaClass(): any;
}

import EventPriority from '../../../org/bukkit/event/EventPriority.js';
export default interface EventHandler {
    priority(): EventPriority;
    ignoreCancelled(): boolean;
    annotationType(): any;
}
export default class EventHandler {
    static get $javaClass(): any;
}

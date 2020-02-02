import EventPriority from '../../../org/bukkit/event/EventPriority.js';
export default interface EventHandler {
    ignoreCancelled(): boolean;
    priority(): EventPriority;
    annotationType(): any;
}
export default class EventHandler {
    static get $javaClass(): any;
}

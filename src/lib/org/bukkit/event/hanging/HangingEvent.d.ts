import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Hanging from '../../../../org/bukkit/entity/Hanging.js';
export default interface HangingEvent extends Event {
    getEntity(): Hanging;
    getEventName(): string;
    isAsynchronous(): boolean;
    getHandlers(): HandlerList;
}
export default class HangingEvent {
    static get $javaClass(): any;
}

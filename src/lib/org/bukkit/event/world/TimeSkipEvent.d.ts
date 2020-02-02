import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import TimeSkipEvent$SkipReason from '../../../../org/bukkit/event/world/TimeSkipEvent$SkipReason.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js';
export default interface TimeSkipEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setSkipAmount(skipAmount: number): void;
    getSkipAmount(): number;
    getSkipReason(): TimeSkipEvent$SkipReason;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class TimeSkipEvent {
    static get $javaClass(): any;
    constructor(world: World, skipReason: TimeSkipEvent$SkipReason, skipAmount: number);
    static getHandlerList(): HandlerList;
}

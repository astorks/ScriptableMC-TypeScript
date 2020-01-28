import { World } from '../../../../org/bukkit/World.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface WorldEvent extends Event {
    getWorld(): World;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class WorldEvent {
    static get $javaClass(): any;
    constructor(world: World);
}

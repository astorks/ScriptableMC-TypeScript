import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { World } from '../../../../org/bukkit/World.js';
import { WorldEvent } from '../../../../org/bukkit/event/world/WorldEvent.js';
export interface WorldInitEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getWorld(): World;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class WorldInitEvent {
    static get $javaClass(): any;
    constructor(world: World);
    static getHandlerList(): HandlerList;
}

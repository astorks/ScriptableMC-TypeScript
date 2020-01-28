import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { World } from '../../../../org/bukkit/World.js';
import { WorldEvent } from '../../../../org/bukkit/event/world/WorldEvent.js';
export interface SpawnChangeEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getPreviousLocation(): Location;
    getWorld(): World;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class SpawnChangeEvent {
    static get $javaClass(): any;
    constructor(world: World, previousLocation: Location);
    static getHandlerList(): HandlerList;
}

import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { World } from '../../../../org/bukkit/World.js';
import { WorldEvent } from '../../../../org/bukkit/event/world/WorldEvent.js';
export interface WorldSaveEvent extends WorldEvent {
    getHandlers(): HandlerList;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class WorldSaveEvent {
    static get $javaClass(): any;
    constructor(world: World);
    static getHandlerList(): HandlerList;
}

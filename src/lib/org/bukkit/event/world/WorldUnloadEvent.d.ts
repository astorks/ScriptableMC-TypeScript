import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { World } from '../../../../org/bukkit/World.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { WorldEvent } from '../../../../org/bukkit/event/world/WorldEvent.js';
export interface WorldUnloadEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getWorld(): World;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class WorldUnloadEvent {
    static get $javaClass(): any;
    constructor(world: World);
    static getHandlerList(): HandlerList;
}

import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { PortalCreateEvent$CreateReason } from '../../../../org/bukkit/event/world/PortalCreateEvent$CreateReason.js';
import { World } from '../../../../org/bukkit/World.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { WorldEvent } from '../../../../org/bukkit/event/world/WorldEvent.js';
export interface PortalCreateEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getReason(): PortalCreateEvent$CreateReason;
    getBlocks(): any;
    getWorld(): World;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PortalCreateEvent {
    static get $javaClass(): any;
    constructor(blocks: any, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
    constructor(blocks: any, world: World, reason: PortalCreateEvent$CreateReason);
    static getHandlerList(): HandlerList;
}

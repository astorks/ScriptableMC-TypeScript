import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import PortalCreateEvent$CreateReason from '../../../../org/bukkit/event/world/PortalCreateEvent$CreateReason.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js';
export default interface PortalCreateEvent extends WorldEvent, Cancellable {
    getEntity(): Entity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getReason(): PortalCreateEvent$CreateReason;
    getBlocks(): Array<BlockState>;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PortalCreateEvent {
    static get $javaClass(): any;
    constructor(blocks: Array<any>, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
    constructor(blocks: Array<any>, world: World, reason: PortalCreateEvent$CreateReason);
    static getHandlerList(): HandlerList;
}

import Block from '../../../../org/bukkit/block/Block.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface EntityExplodeEvent extends EntityEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    blockList(): Array<Block>;
    getYield(): number;
    setYield(_yield: number): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Entity, location: Location, blocks: Array<any>, _yield: number);
    static getHandlerList(): HandlerList;
}

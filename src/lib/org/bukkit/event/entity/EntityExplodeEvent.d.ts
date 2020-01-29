import { Location } from '../../../../org/bukkit/Location.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityExplodeEvent extends EntityEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    blockList(): any;
    getYield(): number;
    setYield(_yield: number): void;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Entity, location: Location, blocks: any, _yield: number);
    static getHandlerList(): HandlerList;
}

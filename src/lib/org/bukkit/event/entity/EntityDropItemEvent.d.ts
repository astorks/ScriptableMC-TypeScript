import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityDropItemEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getItemDrop(): Item;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityDropItemEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, drop: Item);
    static getHandlerList(): HandlerList;
}

import { Item } from '../../../../org/bukkit/entity/Item.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface ItemMergeEvent extends EntityEvent, Cancellable {
    getTarget(): Item;
    getEntity(): Item;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ItemMergeEvent {
    static get $javaClass(): any;
    constructor(item: Item, target: Item);
    static getHandlerList(): HandlerList;
}

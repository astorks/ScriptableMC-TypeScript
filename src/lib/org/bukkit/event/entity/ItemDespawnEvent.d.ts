import { Location } from '../../../../org/bukkit/Location.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface ItemDespawnEvent extends EntityEvent, Cancellable {
    getLocation(): Location;
    getEntity(): Item;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ItemDespawnEvent {
    static get $javaClass(): any;
    constructor(despawnee: Item, loc: Location);
    static getHandlerList(): HandlerList;
}

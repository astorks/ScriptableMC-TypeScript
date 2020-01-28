import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntitySpawnEvent } from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js';
export interface ItemSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): Item;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLocation(): Location;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ItemSpawnEvent {
    static get $javaClass(): any;
    constructor(spawnee: Item);
    constructor(spawnee: Item, loc: Location);
    static getHandlerList(): HandlerList;
}

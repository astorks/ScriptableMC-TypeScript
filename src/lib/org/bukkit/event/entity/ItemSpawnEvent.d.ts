import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntitySpawnEvent from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface ItemSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): Item;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLocation(): Location;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ItemSpawnEvent {
    static get $javaClass(): any;
    constructor(spawnee: Item);
    constructor(spawnee: Item, loc: Location);
    static getHandlerList(): HandlerList;
}

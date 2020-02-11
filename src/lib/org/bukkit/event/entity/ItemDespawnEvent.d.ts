import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface ItemDespawnEvent extends EntityEvent, Cancellable {
    getLocation(): Location;
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Item;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ItemDespawnEvent {
    static get $javaClass(): any;
    constructor(despawnee: Item, loc: Location);
    static getHandlerList(): HandlerList;
}

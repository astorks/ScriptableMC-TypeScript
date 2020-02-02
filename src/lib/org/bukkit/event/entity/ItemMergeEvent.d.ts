import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
export default interface ItemMergeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Item;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getTarget(): Item;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ItemMergeEvent {
    static get $javaClass(): any;
    constructor(item: Item, target: Item);
    static getHandlerList(): HandlerList;
}

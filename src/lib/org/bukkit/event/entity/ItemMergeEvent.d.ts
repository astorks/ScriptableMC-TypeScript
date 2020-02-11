import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
export default interface ItemMergeEvent extends EntityEvent, Cancellable {
    getTarget(): Item;
    getEntity(): Item;
    getEntity(): Entity;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class ItemMergeEvent {
    static get $javaClass(): any;
    constructor(item: Item, target: Item);
    static getHandlerList(): HandlerList;
}

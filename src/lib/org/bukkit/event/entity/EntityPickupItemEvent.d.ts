import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityPickupItemEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getRemaining(): number;
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getItem(): Item;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityPickupItemEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, item: Item, remaining: number);
    static getHandlerList(): HandlerList;
}

import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
    getFoodLevel(): number;
    setFoodLevel(level: number): void;
    getEntity(): Entity;
    getEntity(): HumanEntity;
    getItem(): ItemStack;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FoodLevelChangeEvent {
    static get $javaClass(): any;
    constructor(what: HumanEntity, level: number, item: ItemStack);
    constructor(what: HumanEntity, level: number);
    static getHandlerList(): HandlerList;
}

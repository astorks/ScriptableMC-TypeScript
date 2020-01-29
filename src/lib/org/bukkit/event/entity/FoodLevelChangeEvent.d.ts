import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HumanEntity } from '../../../../org/bukkit/entity/HumanEntity.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface FoodLevelChangeEvent extends EntityEvent, Cancellable {
    getFoodLevel(): number;
    setFoodLevel(level: number): void;
    getEntity(): Entity;
    getEntity(): HumanEntity;
    getItem(): ItemStack;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class FoodLevelChangeEvent {
    static get $javaClass(): any;
    constructor(what: HumanEntity, level: number, item: ItemStack);
    constructor(what: HumanEntity, level: number);
    static getHandlerList(): HandlerList;
}

import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { AbstractVillager } from '../../../../org/bukkit/entity/AbstractVillager.js';
import { MerchantRecipe } from '../../../../org/bukkit/inventory/MerchantRecipe.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface VillagerReplenishTradeEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): AbstractVillager;
    getRecipe(): MerchantRecipe;
    setRecipe(recipe: MerchantRecipe): void;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBonus(): number;
    setBonus(bonus: number): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class VillagerReplenishTradeEvent {
    static get $javaClass(): any;
    constructor(what: AbstractVillager, recipe: MerchantRecipe, bonus: number);
    static getHandlerList(): HandlerList;
}

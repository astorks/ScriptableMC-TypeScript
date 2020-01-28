import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { AbstractVillager } from '../../../../org/bukkit/entity/AbstractVillager.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { MerchantRecipe } from '../../../../org/bukkit/inventory/MerchantRecipe.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): AbstractVillager;
    getEntity(): Entity;
    getRecipe(): MerchantRecipe;
    setRecipe(recipe: MerchantRecipe): void;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class VillagerAcquireTradeEvent {
    static get $javaClass(): any;
    constructor(what: AbstractVillager, recipe: MerchantRecipe);
    static getHandlerList(): HandlerList;
}

import AbstractVillager from '../../../../org/bukkit/entity/AbstractVillager.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import MerchantRecipe from '../../../../org/bukkit/inventory/MerchantRecipe.js';
export default interface VillagerReplenishTradeEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): AbstractVillager;
    getRecipe(): MerchantRecipe;
    setRecipe(recipe: MerchantRecipe): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getBonus(): number;
    setBonus(bonus: number): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VillagerReplenishTradeEvent {
    static get $javaClass(): any;
    constructor(what: AbstractVillager, recipe: MerchantRecipe, bonus: number);
    static getHandlerList(): HandlerList;
}

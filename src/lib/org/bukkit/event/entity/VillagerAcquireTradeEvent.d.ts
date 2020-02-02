import AbstractVillager from '../../../../org/bukkit/entity/AbstractVillager.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import MerchantRecipe from '../../../../org/bukkit/inventory/MerchantRecipe.js';
export default interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): AbstractVillager;
    getRecipe(): MerchantRecipe;
    setRecipe(recipe: MerchantRecipe): void;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class VillagerAcquireTradeEvent {
    static get $javaClass(): any;
    constructor(what: AbstractVillager, recipe: MerchantRecipe);
    static getHandlerList(): HandlerList;
}

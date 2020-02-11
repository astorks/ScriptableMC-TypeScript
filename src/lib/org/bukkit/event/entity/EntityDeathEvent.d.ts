import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityDeathEvent extends EntityEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getDrops(): Array<ItemStack>;
    getHandlers(): HandlerList;
    getDroppedExp(): number;
    setDroppedExp(exp: number): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityDeathEvent {
    static get $javaClass(): any;
    constructor(what: LivingEntity, drops: Array<any>, droppedExp: number);
    constructor(entity: LivingEntity, drops: Array<any>);
    static getHandlerList(): HandlerList;
}

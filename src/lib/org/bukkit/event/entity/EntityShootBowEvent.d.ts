import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityShootBowEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getProjectile(): Entity;
    setProjectile(projectile: Entity): void;
    getForce(): number;
    getBow(): ItemStack;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityShootBowEvent {
    static get $javaClass(): any;
    constructor(shooter: LivingEntity, bow: ItemStack, projectile: Entity, force: number);
    static getHandlerList(): HandlerList;
}
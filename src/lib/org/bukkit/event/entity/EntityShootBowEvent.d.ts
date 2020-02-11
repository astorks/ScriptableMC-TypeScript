import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityShootBowEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): LivingEntity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBow(): ItemStack;
    getProjectile(): Entity;
    setProjectile(projectile: Entity): void;
    getForce(): number;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityShootBowEvent {
    static get $javaClass(): any;
    constructor(shooter: LivingEntity, bow: ItemStack, projectile: Entity, force: number);
    static getHandlerList(): HandlerList;
}

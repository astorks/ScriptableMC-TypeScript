import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityShootBowEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): LivingEntity;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBow(): ItemStack;
    getProjectile(): Entity;
    setProjectile(projectile: Entity): void;
    getForce(): number;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityShootBowEvent {
    static get $javaClass(): any;
    constructor(shooter: LivingEntity, bow: ItemStack, projectile: Entity, force: number);
    static getHandlerList(): HandlerList;
}

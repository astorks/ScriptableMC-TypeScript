import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityBreedEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBreeder(): LivingEntity;
    getFather(): LivingEntity;
    getExperience(): number;
    setExperience(experience: number): void;
    getMother(): LivingEntity;
    getBredWith(): ItemStack;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityBreedEvent {
    static get $javaClass(): any;
    constructor(child: LivingEntity, mother: LivingEntity, father: LivingEntity, breeder: LivingEntity, bredWith: ItemStack, experience: number);
    static getHandlerList(): HandlerList;
}

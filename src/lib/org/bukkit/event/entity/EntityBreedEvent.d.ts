import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityBreedEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): LivingEntity;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setExperience(experience: number): void;
    getMother(): LivingEntity;
    getFather(): LivingEntity;
    getBreeder(): LivingEntity;
    getBredWith(): ItemStack;
    getExperience(): number;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityBreedEvent {
    static get $javaClass(): any;
    constructor(child: LivingEntity, mother: LivingEntity, father: LivingEntity, breeder: LivingEntity, bredWith: ItemStack, experience: number);
    static getHandlerList(): HandlerList;
}

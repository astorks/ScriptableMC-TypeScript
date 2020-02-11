import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityBreedEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): LivingEntity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getExperience(): number;
    setExperience(experience: number): void;
    getMother(): LivingEntity;
    getFather(): LivingEntity;
    getBredWith(): ItemStack;
    getBreeder(): LivingEntity;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityBreedEvent {
    static get $javaClass(): any;
    constructor(child: LivingEntity, mother: LivingEntity, father: LivingEntity, breeder: LivingEntity, bredWith: ItemStack, experience: number);
    static getHandlerList(): HandlerList;
}

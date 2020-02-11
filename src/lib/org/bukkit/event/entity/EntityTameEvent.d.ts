import AnimalTamer from '../../../../org/bukkit/entity/AnimalTamer.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityTameEvent extends EntityEvent, Cancellable {
    getOwner(): AnimalTamer;
    getEntity(): Entity;
    getEntity(): LivingEntity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityTameEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, owner: AnimalTamer);
    static getHandlerList(): HandlerList;
}
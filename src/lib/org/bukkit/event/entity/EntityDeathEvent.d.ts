import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityDeathEvent extends EntityEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getHandlers(): HandlerList;
    getDrops(): any;
    getDroppedExp(): number;
    setDroppedExp(exp: number): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityDeathEvent {
    static get $javaClass(): any;
    constructor(what: LivingEntity, drops: any, droppedExp: number);
    constructor(entity: LivingEntity, drops: any);
    static getHandlerList(): HandlerList;
}

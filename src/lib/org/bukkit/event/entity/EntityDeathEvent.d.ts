import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityDeathEvent extends EntityEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getHandlers(): HandlerList;
    getDrops(): any;
    setDroppedExp(exp: number): void;
    getDroppedExp(): number;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EntityDeathEvent {
    static get $javaClass(): any;
    constructor(what: LivingEntity, drops: any, droppedExp: number);
    constructor(entity: LivingEntity, drops: any);
    static getHandlerList(): HandlerList;
}

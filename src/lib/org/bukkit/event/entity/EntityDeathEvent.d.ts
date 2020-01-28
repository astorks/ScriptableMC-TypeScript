import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface EntityDeathEvent extends EntityEvent {
    getHandlers(): HandlerList;
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getDrops(): any;
    getDroppedExp(): number;
    setDroppedExp(exp: number): void;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class EntityDeathEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, drops: any);
    constructor(what: LivingEntity, drops: any, droppedExp: number);
    static getHandlerList(): HandlerList;
}

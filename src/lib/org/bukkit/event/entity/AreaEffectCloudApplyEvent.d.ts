import { AreaEffectCloud } from '../../../../org/bukkit/entity/AreaEffectCloud.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
    getEntity(): AreaEffectCloud;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAffectedEntities(): any;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class AreaEffectCloudApplyEvent {
    static get $javaClass(): any;
    constructor(entity: AreaEffectCloud, affectedEntities: any);
    static getHandlerList(): HandlerList;
}

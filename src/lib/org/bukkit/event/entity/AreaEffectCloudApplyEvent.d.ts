import AreaEffectCloud from '../../../../org/bukkit/entity/AreaEffectCloud.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): AreaEffectCloud;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getAffectedEntities(): Array<LivingEntity>;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class AreaEffectCloudApplyEvent {
    static get $javaClass(): any;
    constructor(entity: AreaEffectCloud, affectedEntities: Array<any>);
    static getHandlerList(): HandlerList;
}

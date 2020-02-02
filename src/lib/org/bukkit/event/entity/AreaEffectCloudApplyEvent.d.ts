import AreaEffectCloud from '../../../../org/bukkit/entity/AreaEffectCloud.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
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
export default class AreaEffectCloudApplyEvent {
    static get $javaClass(): any;
    constructor(entity: AreaEffectCloud, affectedEntities: any);
    static getHandlerList(): HandlerList;
}

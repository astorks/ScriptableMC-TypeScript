import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import PortalType from '../../../../org/bukkit/PortalType.js';
export default interface EntityCreatePortalEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): LivingEntity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPortalType(): PortalType;
    getBlocks(): Array<BlockState>;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EntityCreatePortalEvent {
    static get $javaClass(): any;
    constructor(what: LivingEntity, blocks: Array<any>, type: PortalType);
    static getHandlerList(): HandlerList;
}

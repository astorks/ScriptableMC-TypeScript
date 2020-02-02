import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Firework from '../../../../org/bukkit/entity/Firework.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface FireworkExplodeEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getEntity(): Firework;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FireworkExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Firework);
    static getHandlerList(): HandlerList;
}

import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Firework from '../../../../org/bukkit/entity/Firework.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface FireworkExplodeEvent extends EntityEvent, Cancellable {
    getEntity(): Firework;
    getEntity(): Entity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FireworkExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Firework);
    static getHandlerList(): HandlerList;
}

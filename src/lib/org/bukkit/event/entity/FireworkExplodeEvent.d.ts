import { Firework } from '../../../../org/bukkit/entity/Firework.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface FireworkExplodeEvent extends EntityEvent, Cancellable {
    getEntity(): Firework;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class FireworkExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Firework);
    static getHandlerList(): HandlerList;
}

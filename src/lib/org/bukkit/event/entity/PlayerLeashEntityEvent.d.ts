import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { Event } from '../../../../org/bukkit/event/Event.js';
export interface PlayerLeashEntityEvent extends Event, Cancellable {
    getLeashHolder(): Entity;
    getPlayer(): Player;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerLeashEntityEvent {
    static get $javaClass(): any;
    constructor(what: Entity, leashHolder: Entity, leasher: Player);
    static getHandlerList(): HandlerList;
}

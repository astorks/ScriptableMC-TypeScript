import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface PlayerLeashEntityEvent extends Event, Cancellable {
    getLeashHolder(): Entity;
    getEntity(): Entity;
    getPlayer(): Player;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerLeashEntityEvent {
    static get $javaClass(): any;
    constructor(what: Entity, leashHolder: Entity, leasher: Player);
    static getHandlerList(): HandlerList;
}

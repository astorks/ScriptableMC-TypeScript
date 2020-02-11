import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
    getVelocity(): Vector;
    setVelocity(velocity: Vector): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerVelocityEvent {
    static get $javaClass(): any;
    constructor(player: Player, velocity: Vector);
    static getHandlerList(): HandlerList;
}

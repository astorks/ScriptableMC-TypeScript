import { Vector } from '../../../../org/bukkit/util/Vector.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
    setVelocity(velocity: Vector): void;
    getVelocity(): Vector;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerVelocityEvent {
    static get $javaClass(): any;
    constructor(player: Player, velocity: Vector);
    static getHandlerList(): HandlerList;
}

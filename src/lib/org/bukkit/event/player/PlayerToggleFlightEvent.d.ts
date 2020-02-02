import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isFlying(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerToggleFlightEvent {
    static get $javaClass(): any;
    constructor(player: Player, isFlying: boolean);
    static getHandlerList(): HandlerList;
}

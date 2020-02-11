import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerMoveEvent extends PlayerEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getTo(): Location;
    setTo(to: Location): void;
    setFrom(from: Location): void;
    getFrom(): Location;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerMoveEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}

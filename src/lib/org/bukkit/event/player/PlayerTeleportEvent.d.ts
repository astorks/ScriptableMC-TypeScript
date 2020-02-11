import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerMoveEvent from '../../../../org/bukkit/event/player/PlayerMoveEvent.js';
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
export default interface PlayerTeleportEvent extends PlayerMoveEvent {
    getCause(): PlayerTeleportEvent$TeleportCause;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFrom(): Location;
    setTo(to: Location): void;
    setFrom(from: Location): void;
    getTo(): Location;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerTeleportEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
    constructor(player: Player, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}

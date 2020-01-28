import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { PlayerTeleportEvent$TeleportCause } from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerMoveEvent } from '../../../../org/bukkit/event/player/PlayerMoveEvent.js';
export interface PlayerTeleportEvent extends PlayerMoveEvent {
    getHandlers(): HandlerList;
    getCause(): PlayerTeleportEvent$TeleportCause;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getTo(): Location;
    setTo(to: Location): void;
    getFrom(): Location;
    setFrom(from: Location): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerTeleportEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location);
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
    static getHandlerList(): HandlerList;
}

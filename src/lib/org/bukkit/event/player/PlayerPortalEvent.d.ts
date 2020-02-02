import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerTeleportEvent from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js';
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
export default interface PlayerPortalEvent extends PlayerTeleportEvent {
    getHandlers(): HandlerList;
    getSearchRadius(): number;
    setSearchRadius(searchRadius: number): void;
    getCanCreatePortal(): boolean;
    setCanCreatePortal(canCreatePortal: boolean): void;
    setCreationRadius(creationRadius: number): void;
    getCreationRadius(): number;
    getCause(): PlayerTeleportEvent$TeleportCause;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFrom(): Location;
    getTo(): Location;
    setFrom(from: Location): void;
    setTo(to: Location): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerPortalEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location);
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause, getSearchRadius: number, canCreatePortal: boolean, creationRadius: number);
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
    static getHandlerList(): HandlerList;
}

import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerTeleportEvent from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js';
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
export default interface PlayerPortalEvent extends PlayerTeleportEvent {
    getHandlers(): HandlerList;
    getSearchRadius(): number;
    setSearchRadius(searchRadius: number): void;
    setCreationRadius(creationRadius: number): void;
    getCanCreatePortal(): boolean;
    getCreationRadius(): number;
    setCanCreatePortal(canCreatePortal: boolean): void;
    getCause(): PlayerTeleportEvent$TeleportCause;
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
export default class PlayerPortalEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
    constructor(player: Player, from: Location, to: Location);
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause, getSearchRadius: number, canCreatePortal: boolean, creationRadius: number);
    static getHandlerList(): HandlerList;
}

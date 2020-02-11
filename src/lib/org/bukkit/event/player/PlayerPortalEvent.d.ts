import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerTeleportEvent from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js';
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
export default interface PlayerPortalEvent extends PlayerTeleportEvent {
    getHandlers(): HandlerList;
    setSearchRadius(searchRadius: number): void;
    getSearchRadius(): number;
    setCanCreatePortal(canCreatePortal: boolean): void;
    setCreationRadius(creationRadius: number): void;
    getCanCreatePortal(): boolean;
    getCreationRadius(): number;
    getCause(): PlayerTeleportEvent$TeleportCause;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getTo(): Location;
    setTo(to: Location): void;
    setFrom(from: Location): void;
    getFrom(): Location;
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

import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { PlayerTeleportEvent$TeleportCause } from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerTeleportEvent } from '../../../../org/bukkit/event/player/PlayerTeleportEvent.js';
export interface PlayerPortalEvent extends PlayerTeleportEvent {
    getHandlers(): HandlerList;
    setSearchRadius(searchRadius: number): void;
    getSearchRadius(): number;
    getCanCreatePortal(): boolean;
    setCanCreatePortal(canCreatePortal: boolean): void;
    setCreationRadius(creationRadius: number): void;
    getCreationRadius(): number;
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
export declare class PlayerPortalEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location);
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause, getSearchRadius: number, canCreatePortal: boolean, creationRadius: number);
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
    static getHandlerList(): HandlerList;
}

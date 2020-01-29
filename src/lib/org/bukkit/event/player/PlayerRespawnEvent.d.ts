import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerRespawnEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getRespawnLocation(): Location;
    isBedSpawn(): boolean;
    setRespawnLocation(respawnLocation: Location): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerRespawnEvent {
    static get $javaClass(): any;
    constructor(respawnPlayer: Player, respawnLocation: Location, isBedSpawn: boolean);
    static getHandlerList(): HandlerList;
}

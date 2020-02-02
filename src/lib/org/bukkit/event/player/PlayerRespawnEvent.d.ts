import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerRespawnEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    isBedSpawn(): boolean;
    getRespawnLocation(): Location;
    setRespawnLocation(respawnLocation: Location): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerRespawnEvent {
    static get $javaClass(): any;
    constructor(respawnPlayer: Player, respawnLocation: Location, isBedSpawn: boolean);
    static getHandlerList(): HandlerList;
}

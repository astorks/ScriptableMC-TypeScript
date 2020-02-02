import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerJoinEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getJoinMessage(): string;
    setJoinMessage(joinMessage: string): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerJoinEvent {
    static get $javaClass(): any;
    constructor(playerJoined: Player, joinMessage: string);
    static getHandlerList(): HandlerList;
}

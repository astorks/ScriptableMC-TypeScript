import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerJoinEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    setJoinMessage(joinMessage: string): void;
    getJoinMessage(): string;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerJoinEvent {
    static get $javaClass(): any;
    constructor(playerJoined: Player, joinMessage: string);
    static getHandlerList(): HandlerList;
}

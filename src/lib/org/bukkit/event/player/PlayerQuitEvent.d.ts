import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerQuitEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    setQuitMessage(quitMessage: string): void;
    getQuitMessage(): string;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerQuitEvent {
    static get $javaClass(): any;
    constructor(who: Player, quitMessage: string);
    static getHandlerList(): HandlerList;
}

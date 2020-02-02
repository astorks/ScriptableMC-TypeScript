import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerQuitEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getQuitMessage(): string;
    setQuitMessage(quitMessage: string): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerQuitEvent {
    static get $javaClass(): any;
    constructor(who: Player, quitMessage: string);
    static getHandlerList(): HandlerList;
}

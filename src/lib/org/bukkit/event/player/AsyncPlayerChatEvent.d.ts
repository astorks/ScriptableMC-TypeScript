import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
    getMessage(): string;
    setMessage(message: string): void;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setFormat(format: string): void;
    getFormat(): string;
    getRecipients(): any;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class AsyncPlayerChatEvent {
    static get $javaClass(): any;
    constructor(async: boolean, who: Player, message: string, players: any);
    static getHandlerList(): HandlerList;
}

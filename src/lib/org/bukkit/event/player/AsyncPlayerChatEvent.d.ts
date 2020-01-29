import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
    getMessage(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setMessage(message: string): void;
    getRecipients(): any;
    setFormat(format: string): void;
    getFormat(): string;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class AsyncPlayerChatEvent {
    static get $javaClass(): any;
    constructor(async: boolean, who: Player, message: string, players: any);
    static getHandlerList(): HandlerList;
}

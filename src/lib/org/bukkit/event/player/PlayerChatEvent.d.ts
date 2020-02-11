import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerChatEvent extends PlayerEvent, Cancellable {
    getMessage(): string;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFormat(): string;
    setFormat(format: string): void;
    getRecipients(): any;
    setMessage(message: string): void;
    setPlayer(player: Player): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerChatEvent {
    static get $javaClass(): any;
    constructor(player: Player, message: string, format: string, recipients: any);
    constructor(player: Player, message: string);
    static getHandlerList(): HandlerList;
}

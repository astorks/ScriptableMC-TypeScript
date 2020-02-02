import BookMeta from '../../../../org/bukkit/inventory/meta/BookMeta.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getNewBookMeta(): BookMeta;
    isSigning(): boolean;
    setSigning(signing: boolean): void;
    setNewBookMeta(newBookMeta: BookMeta): void;
    getPreviousBookMeta(): BookMeta;
    getSlot(): number;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerEditBookEvent {
    static get $javaClass(): any;
    constructor(who: Player, slot: number, previousBookMeta: BookMeta, newBookMeta: BookMeta, isSigning: boolean);
    static getHandlerList(): HandlerList;
}

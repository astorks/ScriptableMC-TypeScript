import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BookMeta } from '../../../../org/bukkit/inventory/meta/BookMeta.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
    getSlot(): number;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPreviousBookMeta(): BookMeta;
    getNewBookMeta(): BookMeta;
    setNewBookMeta(newBookMeta: BookMeta): void;
    isSigning(): boolean;
    setSigning(signing: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerEditBookEvent {
    static get $javaClass(): any;
    constructor(who: Player, slot: number, previousBookMeta: BookMeta, newBookMeta: BookMeta, isSigning: boolean);
    static getHandlerList(): HandlerList;
}

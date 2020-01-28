import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { BookMeta } from '../../../../org/bukkit/inventory/meta/BookMeta.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    isSigning(): boolean;
    getPreviousBookMeta(): BookMeta;
    getNewBookMeta(): BookMeta;
    setNewBookMeta(newBookMeta: BookMeta): void;
    setSigning(signing: boolean): void;
    getSlot(): number;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerEditBookEvent {
    static get $javaClass(): any;
    constructor(who: Player, slot: number, previousBookMeta: BookMeta, newBookMeta: BookMeta, isSigning: boolean);
    static getHandlerList(): HandlerList;
}

import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Lectern } from '../../../../org/bukkit/block/Lectern.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLectern(): Lectern;
    getBook(): ItemStack;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerTakeLecternBookEvent {
    static get $javaClass(): any;
    constructor(who: Player, lectern: Lectern);
    static getHandlerList(): HandlerList;
}

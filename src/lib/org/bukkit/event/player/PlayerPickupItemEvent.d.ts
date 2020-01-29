import { Item } from '../../../../org/bukkit/entity/Item.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
    getRemaining(): number;
    getItem(): Item;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerPickupItemEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: Item, remaining: number);
    static getHandlerList(): HandlerList;
}

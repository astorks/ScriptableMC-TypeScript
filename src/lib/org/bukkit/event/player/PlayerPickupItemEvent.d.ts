import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getRemaining(): number;
    getItem(): Item;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerPickupItemEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: Item, remaining: number);
    static getHandlerList(): HandlerList;
}

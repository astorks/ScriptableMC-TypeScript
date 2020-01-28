import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Item } from '../../../../org/bukkit/entity/Item.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerDropItemEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getItemDrop(): Item;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerDropItemEvent {
    static get $javaClass(): any;
    constructor(player: Player, drop: Item);
    static getHandlerList(): HandlerList;
}

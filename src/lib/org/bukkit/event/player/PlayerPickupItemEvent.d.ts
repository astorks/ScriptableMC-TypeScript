import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
    getRemaining(): number;
    getItem(): Item;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerPickupItemEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: Item, remaining: number);
    static getHandlerList(): HandlerList;
}

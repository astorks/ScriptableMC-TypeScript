import AbstractArrow from '../../../../org/bukkit/entity/AbstractArrow.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerPickupItemEvent from '../../../../org/bukkit/event/player/PlayerPickupItemEvent.js';
export default interface PlayerPickupArrowEvent extends PlayerPickupItemEvent {
    getArrow(): AbstractArrow;
    getHandlers(): HandlerList;
    getRemaining(): number;
    getItem(): Item;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerPickupArrowEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: Item, arrow: AbstractArrow);
    static getHandlerList(): HandlerList;
}

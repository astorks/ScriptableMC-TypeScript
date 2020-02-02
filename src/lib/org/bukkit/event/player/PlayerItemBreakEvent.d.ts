import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerItemBreakEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getBrokenItem(): ItemStack;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerItemBreakEvent {
    static get $javaClass(): any;
    constructor(player: Player, brokenItem: ItemStack);
    static getHandlerList(): HandlerList;
}

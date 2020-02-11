import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
    getItem(): ItemStack;
    setItem(item: ItemStack): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerItemConsumeEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: ItemStack);
    static getHandlerList(): HandlerList;
}

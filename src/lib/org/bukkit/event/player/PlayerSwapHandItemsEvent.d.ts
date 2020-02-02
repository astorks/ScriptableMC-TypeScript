import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getOffHandItem(): ItemStack;
    getMainHandItem(): ItemStack;
    setOffHandItem(offHandItem: ItemStack): void;
    setMainHandItem(mainHandItem: ItemStack): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerSwapHandItemsEvent {
    static get $javaClass(): any;
    constructor(player: Player, mainHandItem: ItemStack, offHandItem: ItemStack);
    static getHandlerList(): HandlerList;
}

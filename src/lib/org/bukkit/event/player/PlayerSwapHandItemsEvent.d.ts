import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setOffHandItem(offHandItem: ItemStack): void;
    setMainHandItem(mainHandItem: ItemStack): void;
    getOffHandItem(): ItemStack;
    getMainHandItem(): ItemStack;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerSwapHandItemsEvent {
    static get $javaClass(): any;
    constructor(player: Player, mainHandItem: ItemStack, offHandItem: ItemStack);
    static getHandlerList(): HandlerList;
}

import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerItemConsumeEvent extends PlayerEvent, Cancellable {
    setItem(item: ItemStack): void;
    getItem(): ItemStack;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerItemConsumeEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: ItemStack);
    static getHandlerList(): HandlerList;
}

import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerItemBreakEvent extends PlayerEvent {
    getHandlers(): HandlerList;
    getBrokenItem(): ItemStack;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerItemBreakEvent {
    static get $javaClass(): any;
    constructor(player: Player, brokenItem: ItemStack);
    static getHandlerList(): HandlerList;
}

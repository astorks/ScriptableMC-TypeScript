import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerRiptideEvent extends PlayerEvent {
    getItem(): ItemStack;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PlayerRiptideEvent {
    static get $javaClass(): any;
    constructor(who: Player, item: ItemStack);
    static getHandlerList(): HandlerList;
}

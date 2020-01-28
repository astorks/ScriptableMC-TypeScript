import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    setDamage(damage: number): void;
    getDamage(): number;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerItemDamageEvent {
    static get $javaClass(): any;
    constructor(player: Player, what: ItemStack, damage: number);
    static getHandlerList(): HandlerList;
}

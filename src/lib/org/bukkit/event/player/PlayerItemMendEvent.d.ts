import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { ExperienceOrb } from '../../../../org/bukkit/entity/ExperienceOrb.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { PlayerEvent } from '../../../../org/bukkit/event/player/PlayerEvent.js';
export interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getExperienceOrb(): ExperienceOrb;
    getRepairAmount(): number;
    setRepairAmount(amount: number): void;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerItemMendEvent {
    static get $javaClass(): any;
    constructor(who: Player, item: ItemStack, experienceOrb: ExperienceOrb, repairAmount: number);
    static getHandlerList(): HandlerList;
}

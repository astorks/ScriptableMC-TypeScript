import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import ExperienceOrb from '../../../../org/bukkit/entity/ExperienceOrb.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js';
export default interface PlayerItemMendEvent extends PlayerEvent, Cancellable {
    getItem(): ItemStack;
    setCancelled(cancelled: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getExperienceOrb(): ExperienceOrb;
    getRepairAmount(): number;
    setRepairAmount(amount: number): void;
    getPlayer(): Player;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PlayerItemMendEvent {
    static get $javaClass(): any;
    constructor(who: Player, item: ItemStack, experienceOrb: ExperienceOrb, repairAmount: number);
    static getHandlerList(): HandlerList;
}

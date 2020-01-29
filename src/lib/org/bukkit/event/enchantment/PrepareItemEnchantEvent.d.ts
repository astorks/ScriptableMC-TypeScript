import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { EnchantmentOffer } from '../../../../org/bukkit/enchantments/EnchantmentOffer.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { InventoryEvent } from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
export interface PrepareItemEnchantEvent extends InventoryEvent, Cancellable {
    getItem(): ItemStack;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getExpLevelCostsOffered(): Array<number>;
    getEnchantmentBonus(): number;
    getEnchantBlock(): Block;
    getEnchanter(): Player;
    getOffers(): Array<EnchantmentOffer>;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class PrepareItemEnchantEvent {
    static get $javaClass(): any;
    constructor(enchanter: Player, view: InventoryView, table: Block, item: ItemStack, offers: Array<EnchantmentOffer>, bonus: number);
    static getHandlerList(): HandlerList;
}

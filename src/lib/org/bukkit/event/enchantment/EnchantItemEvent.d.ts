import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Inventory } from '../../../../org/bukkit/inventory/Inventory.js';
import { InventoryView } from '../../../../org/bukkit/inventory/InventoryView.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { InventoryEvent } from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
export interface EnchantItemEvent extends InventoryEvent, Cancellable {
    getItem(): ItemStack;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEnchantBlock(): Block;
    setExpLevelCost(level: number): void;
    getEnchantsToAdd(): any;
    getExpLevelCost(): number;
    whichButton(): number;
    getEnchanter(): Player;
    getInventory(): Inventory;
    getViewers(): any;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class EnchantItemEvent {
    static get $javaClass(): any;
    constructor(enchanter: Player, view: InventoryView, table: Block, item: ItemStack, level: number, enchants: any, i: number);
    static getHandlerList(): HandlerList;
}

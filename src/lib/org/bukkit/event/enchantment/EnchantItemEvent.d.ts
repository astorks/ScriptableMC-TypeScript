import Block from '../../../../org/bukkit/block/Block.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryEvent from '../../../../org/bukkit/event/inventory/InventoryEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface EnchantItemEvent extends InventoryEvent, Cancellable {
    getItem(): ItemStack;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getExpLevelCost(): number;
    getEnchanter(): Player;
    getEnchantBlock(): Block;
    getEnchantsToAdd(): any;
    whichButton(): number;
    setExpLevelCost(level: number): void;
    getInventory(): Inventory;
    getViewers(): Array<HumanEntity>;
    getView(): InventoryView;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class EnchantItemEvent {
    static get $javaClass(): any;
    constructor(enchanter: Player, view: InventoryView, table: Block, item: ItemStack, level: number, enchants: any, i: number);
    static getHandlerList(): HandlerList;
}

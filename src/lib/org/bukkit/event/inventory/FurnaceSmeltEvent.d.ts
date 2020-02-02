import Block from '../../../../org/bukkit/block/Block.js';
import BlockCookEvent from '../../../../org/bukkit/event/block/BlockCookEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface FurnaceSmeltEvent extends BlockCookEvent {
    setResult(result: ItemStack): void;
    getResult(): ItemStack;
    getHandlers(): HandlerList;
    getSource(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FurnaceSmeltEvent {
    static get $javaClass(): any;
    constructor(furnace: Block, source: ItemStack, result: ItemStack);
    static getHandlerList(): HandlerList;
}

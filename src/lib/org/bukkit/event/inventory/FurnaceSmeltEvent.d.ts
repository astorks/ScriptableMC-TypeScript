import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockCookEvent } from '../../../../org/bukkit/event/block/BlockCookEvent.js';
export interface FurnaceSmeltEvent extends BlockCookEvent {
    getHandlers(): HandlerList;
    getSource(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setResult(result: ItemStack): void;
    getResult(): ItemStack;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class FurnaceSmeltEvent {
    static get $javaClass(): any;
    constructor(furnace: Block, source: ItemStack, result: ItemStack);
    static getHandlerList(): HandlerList;
}

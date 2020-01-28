import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockCookEvent extends BlockEvent, Cancellable {
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
export declare class BlockCookEvent {
    static get $javaClass(): any;
    constructor(block: Block, source: ItemStack, result: ItemStack);
    static getHandlerList(): HandlerList;
}

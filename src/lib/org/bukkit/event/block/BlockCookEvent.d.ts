import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockCookEvent extends BlockEvent, Cancellable {
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
export declare class BlockCookEvent {
    static get $javaClass(): any;
    constructor(block: Block, source: ItemStack, result: ItemStack);
    static getHandlerList(): HandlerList;
}

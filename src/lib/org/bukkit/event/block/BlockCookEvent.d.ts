import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface BlockCookEvent extends BlockEvent, Cancellable {
    setResult(result: ItemStack): void;
    getResult(): ItemStack;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getSource(): ItemStack;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockCookEvent {
    static get $javaClass(): any;
    constructor(block: Block, source: ItemStack, result: ItemStack);
    static getHandlerList(): HandlerList;
}
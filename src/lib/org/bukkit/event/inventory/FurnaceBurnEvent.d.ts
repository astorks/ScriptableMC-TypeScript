import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface FurnaceBurnEvent extends BlockEvent, Cancellable {
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    setBurning(burning: boolean): void;
    isBurning(): boolean;
    getBurnTime(): number;
    setBurnTime(burnTime: number): void;
    getFuel(): ItemStack;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FurnaceBurnEvent {
    static get $javaClass(): any;
    constructor(furnace: Block, fuel: ItemStack, burnTime: number);
    static getHandlerList(): HandlerList;
}

import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface FurnaceBurnEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBurnTime(): number;
    setBurnTime(burnTime: number): void;
    getFuel(): ItemStack;
    isBurning(): boolean;
    setBurning(burning: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class FurnaceBurnEvent {
    static get $javaClass(): any;
    constructor(furnace: Block, fuel: ItemStack, burnTime: number);
    static getHandlerList(): HandlerList;
}

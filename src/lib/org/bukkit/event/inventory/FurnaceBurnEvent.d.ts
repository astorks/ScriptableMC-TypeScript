import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface FurnaceBurnEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getFuel(): ItemStack;
    setBurnTime(burnTime: number): void;
    setBurning(burning: boolean): void;
    isBurning(): boolean;
    getBurnTime(): number;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class FurnaceBurnEvent {
    static get $javaClass(): any;
    constructor(furnace: Block, fuel: ItemStack, burnTime: number);
    static getHandlerList(): HandlerList;
}

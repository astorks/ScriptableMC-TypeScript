import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Vector } from '../../../../org/bukkit/util/Vector.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockDispenseEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    setVelocity(vel: Vector): void;
    getVelocity(): Vector;
    setItem(item: ItemStack): void;
    getItem(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockDispenseEvent {
    static get $javaClass(): any;
    constructor(block: Block, dispensed: ItemStack, velocity: Vector);
    static getHandlerList(): HandlerList;
}

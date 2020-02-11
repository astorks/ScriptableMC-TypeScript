import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface BlockDispenseEvent extends BlockEvent, Cancellable {
    getVelocity(): Vector;
    setVelocity(vel: Vector): void;
    getItem(): ItemStack;
    setItem(item: ItemStack): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockDispenseEvent {
    static get $javaClass(): any;
    constructor(block: Block, dispensed: ItemStack, velocity: Vector);
    static getHandlerList(): HandlerList;
}

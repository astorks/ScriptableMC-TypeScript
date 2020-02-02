import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface BlockDispenseEvent extends BlockEvent, Cancellable {
    setVelocity(vel: Vector): void;
    getVelocity(): Vector;
    getItem(): ItemStack;
    setItem(item: ItemStack): void;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockDispenseEvent {
    static get $javaClass(): any;
    constructor(block: Block, dispensed: ItemStack, velocity: Vector);
    static getHandlerList(): HandlerList;
}

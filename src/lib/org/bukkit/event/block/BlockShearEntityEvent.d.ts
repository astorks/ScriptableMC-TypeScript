import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface BlockShearEntityEvent extends BlockEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Entity;
    getTool(): ItemStack;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockShearEntityEvent {
    static get $javaClass(): any;
    constructor(dispenser: Block, sheared: Entity, tool: ItemStack);
    static getHandlerList(): HandlerList;
}

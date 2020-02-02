import Block from '../../../../org/bukkit/block/Block.js';
import BlockDispenseEvent from '../../../../org/bukkit/event/block/BlockDispenseEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface BlockDispenseArmorEvent extends BlockDispenseEvent {
    getTargetEntity(): LivingEntity;
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
export default class BlockDispenseArmorEvent {
    static get $javaClass(): any;
    constructor(block: Block, dispensed: ItemStack, target: LivingEntity);
    static getHandlerList(): HandlerList;
}
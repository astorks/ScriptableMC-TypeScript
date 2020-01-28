import { LivingEntity } from '../../../../org/bukkit/entity/LivingEntity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Vector } from '../../../../org/bukkit/util/Vector.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockDispenseEvent } from '../../../../org/bukkit/event/block/BlockDispenseEvent.js';
export interface BlockDispenseArmorEvent extends BlockDispenseEvent {
    getTargetEntity(): LivingEntity;
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
export declare class BlockDispenseArmorEvent {
    static get $javaClass(): any;
    constructor(block: Block, dispensed: ItemStack, target: LivingEntity);
    static getHandlerList(): HandlerList;
}

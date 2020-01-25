declare var Java: any;
import {LivingEntity} from '../../../../org/bukkit/entity/LivingEntity.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Vector} from '../../../../org/bukkit/util/Vector.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockDispenseEvent} from '../../../../org/bukkit/event/block/BlockDispenseEvent.js'

export interface BlockDispenseArmorEvent extends BlockDispenseEvent {
	getTargetEntity(): LivingEntity;
	getHandlers(): HandlerList;
	setVelocity(vel: Vector): void;
	getVelocity(): Vector;
	getItem(): ItemStack;
	setItem(item: ItemStack): void;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BlockDispenseArmorEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockDispenseArmorEvent');
	}
	constructor(block: Block, dispensed: ItemStack, target: LivingEntity);
	constructor(...args: any[]) {
		return new BlockDispenseArmorEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockDispenseArmorEvent.$javaClass.getHandlerList(...args);
	}
}


declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockDispenseEvent from '../../../../org/bukkit/event/block/BlockDispenseEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js'
import Vector from '../../../../org/bukkit/util/Vector.js'

export default interface BlockDispenseArmorEvent extends BlockDispenseEvent {
	getBlock(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getItem(): ItemStack;
	getTargetEntity(): LivingEntity;
	getVelocity(): Vector;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setItem(item: ItemStack): void;
	setVelocity(vel: Vector): void;
}

export default class BlockDispenseArmorEvent {
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


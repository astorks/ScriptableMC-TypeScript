declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js'

export default interface BrewingStandFuelEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getEventName(): string;
	getFuel(): ItemStack;
	getFuelPower(): number;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	isConsuming(): boolean;
	setCancelled(cancel: boolean): void;
	setConsuming(consuming: boolean): void;
	setFuelPower(fuelPower: number): void;
}

export default class BrewingStandFuelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.BrewingStandFuelEvent');
	}

	constructor(brewingStand: Block, fuel: ItemStack, fuelPower: number);
	constructor(...args: any[]) {
		return new BrewingStandFuelEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BrewingStandFuelEvent.$javaClass.getHandlerList(...args);
	}

}


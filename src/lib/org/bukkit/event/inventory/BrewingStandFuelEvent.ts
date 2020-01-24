declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {BlockEvent} from '../../../../org/bukkit/event/block/BlockEvent.js'

export interface BrewingStandFuelEvent extends BlockEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getFuelPower(): number;
	getFuel(): ItemStack;
	isConsuming(): boolean;
	setConsuming(consuming: boolean): void;
	setFuelPower(fuelPower: number): void;
	getBlock(): Block;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class BrewingStandFuelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.BrewingStandFuelEvent');
	}
	constructor(brewingStand: Block, fuel: ItemStack, fuelPower: number);
	constructor(...args: any[]) {
		return new BrewingStandFuelEvent.$javaClass(...args);
	}
}


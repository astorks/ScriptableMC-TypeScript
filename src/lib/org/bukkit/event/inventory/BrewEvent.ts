declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import BrewerInventory from '../../../../org/bukkit/inventory/BrewerInventory.js'
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'

export default interface BrewEvent extends BlockEvent, Cancellable {
	getBlock(): Block;
	getContents(): BrewerInventory;
	getEventName(): string;
	getFuelLevel(): number;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class BrewEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.BrewEvent');
	}

	constructor(brewer: Block, contents: BrewerInventory, fuelLevel: number);
	constructor(...args: any[]) {
		return new BrewEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BrewEvent.$javaClass.getHandlerList(...args);
	}

}


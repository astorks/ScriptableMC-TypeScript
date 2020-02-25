declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockExpEvent from '../../../../org/bukkit/event/block/BlockExpEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Material from '../../../../org/bukkit/Material.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface FurnaceExtractEvent extends BlockExpEvent {
	getBlock(): Block;
	getEventName(): string;
	getExpToDrop(): number;
	getHandlers(): HandlerList;
	getItemAmount(): number;
	getItemType(): Material;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	setExpToDrop(exp: number): void;
}

export default class FurnaceExtractEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.FurnaceExtractEvent');
	}

	constructor(player: Player, block: Block, itemType: Material, itemAmount: number, exp: number);
	constructor(...args: any[]) {
		return new FurnaceExtractEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return FurnaceExtractEvent.$javaClass.getHandlerList(...args);
	}

}


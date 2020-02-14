declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Material from '../../../../org/bukkit/Material.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface BlockCanBuildEvent extends BlockEvent {
	getBlock(): Block;
	getBlockData(): BlockData;
	getEventName(): string;
	getHandlers(): HandlerList;
	getMaterial(): Material;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isBuildable(): boolean;
	setBuildable(cancel: boolean): void;
}

export default class BlockCanBuildEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.BlockCanBuildEvent');
	}

	constructor(block: Block, type: BlockData, canBuild: boolean);
	constructor(block: Block, player: Player, type: BlockData, canBuild: boolean);
	constructor(...args: any[]) {
		return new BlockCanBuildEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return BlockCanBuildEvent.$javaClass.getHandlerList(...args);
	}

}


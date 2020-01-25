declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {BlockFace} from '../../../../org/bukkit/block/BlockFace.js'
import {Hanging} from '../../../../org/bukkit/entity/Hanging.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {HangingEvent} from '../../../../org/bukkit/event/hanging/HangingEvent.js'

export interface HangingPlaceEvent extends HangingEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getBlock(): Block;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getBlockFace(): BlockFace;
	getEntity(): Hanging;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class HangingPlaceEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingPlaceEvent');
	}
	constructor(hanging: Hanging, player: Player, block: Block, blockFace: BlockFace);
	constructor(...args: any[]) {
		return new HangingPlaceEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return HangingPlaceEvent.$javaClass.getHandlerList(...args);
	}
}


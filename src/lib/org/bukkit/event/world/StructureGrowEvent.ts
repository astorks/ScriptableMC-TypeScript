declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {TreeType} from '../../../../org/bukkit/TreeType.js'
import {Location} from '../../../../org/bukkit/Location.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface StructureGrowEvent extends WorldEvent, Cancellable {
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getBlocks(): any;
	getSpecies(): TreeType;
	isFromBonemeal(): boolean;
	getLocation(): Location;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class StructureGrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.StructureGrowEvent');
	}
	constructor(location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: any);
	constructor(...args: any[]) {
		return new StructureGrowEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return StructureGrowEvent.$javaClass.getHandlerList(...args);
	}
}


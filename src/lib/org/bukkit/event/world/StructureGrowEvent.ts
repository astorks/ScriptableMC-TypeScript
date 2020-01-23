declare var Java: any;
import {Location} from '../../../../org/bukkit/Location.js'
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {TreeType} from '../../../../org/bukkit/TreeType.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface StructureGrowEvent extends WorldEvent, Cancellable {
	getLocation(): Location;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	getBlocks(): any;
	isFromBonemeal(): boolean;
	getSpecies(): TreeType;
	getWorld(): World;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class StructureGrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.StructureGrowEvent');
	}
	constructor(location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: any);
	constructor(...args: any[]) {
		return new StructureGrowEvent.$javaClass(...args);
	}
}


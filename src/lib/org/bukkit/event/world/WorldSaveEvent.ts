declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface WorldSaveEvent extends WorldEvent {
	getHandlers(): HandlerList;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class WorldSaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldSaveEvent');
	}
	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldSaveEvent.$javaClass(...args);
	}
}


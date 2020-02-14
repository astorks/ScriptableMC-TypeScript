declare var Java: any;
import Event from '../../../../org/bukkit/event/Event.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'

export default interface WorldEvent extends Event {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class WorldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldEvent');
	}

	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldEvent.$javaClass(...args);
	}

}


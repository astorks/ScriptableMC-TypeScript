declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface SpawnChangeEvent extends WorldEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPreviousLocation(): Location;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class SpawnChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.SpawnChangeEvent');
	}

	constructor(world: World, previousLocation: Location);
	constructor(...args: any[]) {
		return new SpawnChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return SpawnChangeEvent.$javaClass.getHandlerList(...args);
	}

}


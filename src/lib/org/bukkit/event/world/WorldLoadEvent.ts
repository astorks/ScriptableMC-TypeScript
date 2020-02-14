declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface WorldLoadEvent extends WorldEvent {
	getHandlers(): HandlerList;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export default class WorldLoadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldLoadEvent');
	}
	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldLoadEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return WorldLoadEvent.$javaClass.getHandlerList(...args);
	}
}


declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface WorldSaveEvent extends WorldEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class WorldSaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldSaveEvent');
	}

	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldSaveEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return WorldSaveEvent.$javaClass.getHandlerList(...args);
	}

}


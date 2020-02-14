declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface WorldInitEvent extends WorldEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class WorldInitEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldInitEvent');
	}

	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldInitEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return WorldInitEvent.$javaClass.getHandlerList(...args);
	}

}


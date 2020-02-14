declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface WorldUnloadEvent extends WorldEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class WorldUnloadEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.WorldUnloadEvent');
	}

	constructor(world: World);
	constructor(...args: any[]) {
		return new WorldUnloadEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return WorldUnloadEvent.$javaClass.getHandlerList(...args);
	}

}


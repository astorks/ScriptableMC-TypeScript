declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {WorldEvent} from '../../../../org/bukkit/event/world/WorldEvent.js'

export interface WorldUnloadEvent extends WorldEvent, Cancellable {
	getHandlers(): HandlerList;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getWorld(): World;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class WorldUnloadEvent {
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


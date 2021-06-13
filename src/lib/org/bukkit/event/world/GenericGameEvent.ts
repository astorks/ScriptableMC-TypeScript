declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import GameEvent from '../../../../org/bukkit/GameEvent.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Location from '../../../../org/bukkit/Location.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from './WorldEvent.js'

export default interface GenericGameEvent extends WorldEvent, Cancellable {
	getEntity(): Entity;
	getEvent(): GameEvent;
	getEventName(): string;
	getHandlers(): HandlerList;
	getLocation(): Location;
	getRadius(): number;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setRadius(radius: number): void;
}

export default class GenericGameEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.GenericGameEvent');
	}

	constructor(event: GameEvent, location: Location, entity: Entity, radius: number);
	constructor(...args: any[]) {
		return new GenericGameEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return GenericGameEvent.$javaClass.getHandlerList(...args);
	}

}


declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import TimeSkipEvent$SkipReason from '../../../../org/bukkit/event/world/TimeSkipEvent$SkipReason.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface TimeSkipEvent extends WorldEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getSkipAmount(): number;
	getSkipReason(): TimeSkipEvent$SkipReason;
	getWorld(): World;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	setSkipAmount(skipAmount: number): void;
}

export default class TimeSkipEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.world.TimeSkipEvent');
	}

	constructor(world: World, skipReason: TimeSkipEvent$SkipReason, skipAmount: number);
	constructor(...args: any[]) {
		return new TimeSkipEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return TimeSkipEvent.$javaClass.getHandlerList(...args);
	}

}


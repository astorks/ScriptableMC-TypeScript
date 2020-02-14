declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Hanging from '../../../../org/bukkit/entity/Hanging.js'
import HangingBreakEvent$RemoveCause from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js'
import HangingEvent from '../../../../org/bukkit/event/hanging/HangingEvent.js'

export default interface HangingBreakEvent extends HangingEvent, Cancellable {
	getCause(): HangingBreakEvent$RemoveCause;
	getEntity(): Hanging;
	getEventName(): string;
	getHandlers(): HandlerList;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class HangingBreakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakEvent');
	}

	constructor(hanging: Hanging, cause: HangingBreakEvent$RemoveCause);
	constructor(...args: any[]) {
		return new HangingBreakEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return HangingBreakEvent.$javaClass.getHandlerList(...args);
	}

}


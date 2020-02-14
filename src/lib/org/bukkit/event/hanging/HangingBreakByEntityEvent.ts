declare var Java: any;
import Entity from '../../../../org/bukkit/entity/Entity.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Hanging from '../../../../org/bukkit/entity/Hanging.js'
import HangingBreakEvent from '../../../../org/bukkit/event/hanging/HangingBreakEvent.js'
import HangingBreakEvent$RemoveCause from '../../../../org/bukkit/event/hanging/HangingBreakEvent$RemoveCause.js'

export default interface HangingBreakByEntityEvent extends HangingBreakEvent {
	getCause(): HangingBreakEvent$RemoveCause;
	getEntity(): Hanging;
	getEventName(): string;
	getHandlers(): HandlerList;
	getRemover(): Entity;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class HangingBreakByEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakByEntityEvent');
	}

	constructor(hanging: Hanging, remover: Entity);
	constructor(hanging: Hanging, remover: Entity, cause: HangingBreakEvent$RemoveCause);
	constructor(...args: any[]) {
		return new HangingBreakByEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return HangingBreakByEntityEvent.$javaClass.getHandlerList(...args);
	}

}


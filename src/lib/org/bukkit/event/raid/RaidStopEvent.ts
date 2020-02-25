declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from '../../../../org/bukkit/event/raid/RaidEvent.js'
import RaidStopEvent$Reason from '../../../../org/bukkit/event/raid/RaidStopEvent$Reason.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidStopEvent extends RaidEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getRaid(): Raid;
	getReason(): RaidStopEvent$Reason;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class RaidStopEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidStopEvent');
	}

	constructor(raid: Raid, world: World, reason: RaidStopEvent$Reason);
	constructor(...args: any[]) {
		return new RaidStopEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidStopEvent.$javaClass.getHandlerList(...args);
	}

}


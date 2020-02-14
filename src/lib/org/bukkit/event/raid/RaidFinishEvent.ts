declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from '../../../../org/bukkit/event/raid/RaidEvent.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidFinishEvent extends RaidEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getRaid(): Raid;
	getWinners(): Array<Player>;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class RaidFinishEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidFinishEvent');
	}

	constructor(raid: Raid, world: World, winners: Array<any>);
	constructor(...args: any[]) {
		return new RaidFinishEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidFinishEvent.$javaClass.getHandlerList(...args);
	}

}


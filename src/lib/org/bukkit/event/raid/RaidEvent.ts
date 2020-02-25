declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Raid from '../../../../org/bukkit/Raid.js'
import World from '../../../../org/bukkit/World.js'
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js'

export default interface RaidEvent extends WorldEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getRaid(): Raid;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class RaidEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidEvent');
	}

}


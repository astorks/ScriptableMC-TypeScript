declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Raid from '../../../../org/bukkit/Raid.js'
import RaidEvent from '../../../../org/bukkit/event/raid/RaidEvent.js'
import Raider from '../../../../org/bukkit/entity/Raider.js'
import World from '../../../../org/bukkit/World.js'

export default interface RaidSpawnWaveEvent extends RaidEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getPatrolLeader(): Raider;
	getRaid(): Raid;
	getRaiders(): Array<Raider>;
	getWorld(): World;
	isAsynchronous(): boolean;
}

export default class RaidSpawnWaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidSpawnWaveEvent');
	}

	constructor(raid: Raid, world: World, leader: Raider, raiders: Array<any>);
	constructor(...args: any[]) {
		return new RaidSpawnWaveEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return RaidSpawnWaveEvent.$javaClass.getHandlerList(...args);
	}

}


declare var Java: any;
import Location from '../../org/bukkit/Location.js'
import Raid$RaidStatus from '../../org/bukkit/Raid$RaidStatus.js'
import Raider from '../../org/bukkit/entity/Raider.js'

export default interface Raid {
	isStarted(): boolean;
	getActiveTicks(): number;
	getBadOmenLevel(): number;
	setBadOmenLevel(arg0: number): void;
	getStatus(): Raid$RaidStatus;
	getSpawnedGroups(): number;
	getTotalGroups(): number;
	getTotalWaves(): number;
	getTotalHealth(): number;
	getHeroes(): any;
	getRaiders(): Array<Raider>;
	getLocation(): Location;
}

export default class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
}


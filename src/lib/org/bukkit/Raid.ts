declare var Java: any;
import Location from '../../org/bukkit/Location.js'
import Raid$RaidStatus from '../../org/bukkit/Raid$RaidStatus.js'
import Raider from '../../org/bukkit/entity/Raider.js'

export default interface Raid {
	getActiveTicks(): number;
	getBadOmenLevel(): number;
	getHeroes(): any;
	getLocation(): Location;
	getRaiders(): Array<Raider>;
	getSpawnedGroups(): number;
	getStatus(): Raid$RaidStatus;
	getTotalGroups(): number;
	getTotalHealth(): number;
	getTotalWaves(): number;
	isStarted(): boolean;
	setBadOmenLevel(arg0: number): void;
}

export default class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}

}


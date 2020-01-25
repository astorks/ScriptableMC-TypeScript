declare var Java: any;
import {Raid$RaidStatus} from '../../org/bukkit/Raid$RaidStatus.js'
import {Location} from '../../org/bukkit/Location.js'

export interface Raid {
	getTotalWaves(): number;
	getTotalHealth(): number;
	getHeroes(): any;
	getRaiders(): any;
	isStarted(): boolean;
	getActiveTicks(): number;
	getBadOmenLevel(): number;
	setBadOmenLevel(arg0: number): void;
	getStatus(): Raid$RaidStatus;
	getSpawnedGroups(): number;
	getTotalGroups(): number;
	getLocation(): Location;
}

export class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
}


declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'
import {Raid$RaidStatus} from '../../org/bukkit/Raid$RaidStatus.js'

export interface Raid {
	getLocation(): Location;
	getTotalHealth(): number;
	getSpawnedGroups(): number;
	getTotalGroups(): number;
	setBadOmenLevel(badOmenLevel: number): void;
	isStarted(): boolean;
	getStatus(): Raid$RaidStatus;
	getTotalWaves(): number;
	getRaiders(): any;
	getHeroes(): any;
	getActiveTicks(): number;
	getBadOmenLevel(): number;
}

export class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
}


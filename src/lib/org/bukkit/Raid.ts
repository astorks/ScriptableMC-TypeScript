declare var Java: any;
import {Location} from '../../org/bukkit/Location.js'
import {Raid$RaidStatus} from '../../org/bukkit/Raid$RaidStatus.js'

export interface Raid {
	getLocation(): Location;
	setBadOmenLevel(badOmenLevel: number): void;
	getActiveTicks(): number;
	getBadOmenLevel(): number;
	getStatus(): Raid$RaidStatus;
	getTotalGroups(): number;
	getRaiders(): any;
	isStarted(): boolean;
	getTotalHealth(): number;
	getSpawnedGroups(): number;
	getHeroes(): any;
	getTotalWaves(): number;
}

export class Raid {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid');
	}
}


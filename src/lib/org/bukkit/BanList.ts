declare var Java: any;
import {BanEntry} from '../../org/bukkit/BanEntry.js'

export interface BanList {
	isBanned(target: string): boolean;
	addBan(target: string, reason: string, expires: any, source: string): BanEntry;
	pardon(target: string): void;
	getBanEntries(): any;
	getBanEntry(target: string): BanEntry;
}

export class BanList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList');
	}
}


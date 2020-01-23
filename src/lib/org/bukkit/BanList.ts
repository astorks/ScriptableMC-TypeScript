declare var Java: any;
import {BanEntry} from '../../org/bukkit/BanEntry.js'

export interface BanList {
	getBanEntries(): any;
	isBanned(target: string): boolean;
	pardon(target: string): void;
	getBanEntry(target: string): BanEntry;
	addBan(target: string, reason: string, expires: any, source: string): BanEntry;
}

export class BanList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList');
	}
}


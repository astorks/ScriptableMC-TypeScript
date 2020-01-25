declare var Java: any;
import {BanEntry} from '../../org/bukkit/BanEntry.js'

export interface BanList {
	isBanned(arg0: string): boolean;
	getBanEntry(arg0: string): BanEntry;
	addBan(arg0: string, arg1: string, arg2: any, arg3: string): BanEntry;
	getBanEntries(): any;
	pardon(arg0: string): void;
}

export class BanList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList');
	}
}

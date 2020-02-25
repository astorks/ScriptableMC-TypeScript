declare var Java: any;
import BanEntry from '../../org/bukkit/BanEntry.js'

export default interface BanList {
	addBan(arg0: string, arg1: string, arg2: any, arg3: string): BanEntry;
	getBanEntries(): any;
	getBanEntry(arg0: string): BanEntry;
	isBanned(arg0: string): boolean;
	pardon(arg0: string): void;
}

export default class BanList {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList');
	}

}


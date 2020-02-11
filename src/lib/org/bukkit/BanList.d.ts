import BanEntry from '../../org/bukkit/BanEntry.js';
export default interface BanList {
    isBanned(arg0: string): boolean;
    addBan(arg0: string, arg1: string, arg2: any, arg3: string): BanEntry;
    getBanEntries(): any;
    pardon(arg0: string): void;
    getBanEntry(arg0: string): BanEntry;
}
export default class BanList {
    static get $javaClass(): any;
}

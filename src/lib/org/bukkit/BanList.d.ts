import BanEntry from '../../org/bukkit/BanEntry.js';
export default interface BanList {
    isBanned(arg0: string): boolean;
    getBanEntry(arg0: string): BanEntry;
    getBanEntries(): any;
    addBan(arg0: string, arg1: string, arg2: any, arg3: string): BanEntry;
    pardon(arg0: string): void;
}
export default class BanList {
    static get $javaClass(): any;
}

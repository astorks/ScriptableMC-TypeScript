export interface Raid$RaidStatus {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Raid$RaidStatus {
    static get $javaClass(): any;
    static get ONGOING(): Raid$RaidStatus;
    static get VICTORY(): Raid$RaidStatus;
    static get LOSS(): Raid$RaidStatus;
    static get STOPPED(): Raid$RaidStatus;
}

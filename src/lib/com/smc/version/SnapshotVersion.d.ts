export default interface SnapshotVersion {
    compareTo(arg0: any): number;
    compareTo(that: SnapshotVersion): number;
    getSnapshotDate(): any;
    getSnapshotWeekVersion(): number;
    getSnapshotString(): string;
}
export default class SnapshotVersion {
    static get $javaClass(): any;
    static get COMPARATOR(): any;
    static parse(version: string): SnapshotVersion;
}

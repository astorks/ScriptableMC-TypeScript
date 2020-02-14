declare var Java: any;

export default interface SnapshotVersion {
	getSnapshotDate(): any;
	getSnapshotWeekVersion(): number;
	getSnapshotString(): string;
	compareTo(arg0: any): number;
	compareTo(that: SnapshotVersion): number;
}

export default class SnapshotVersion {
	public static get $javaClass(): any {
		return Java.type('com.smc.version.SnapshotVersion');
	}
	public static get COMPARATOR(): any {
		return SnapshotVersion.$javaClass.COMPARATOR;
	}
	public static parse(version: string): SnapshotVersion;
	public static parse(...args: any[]): any {
		return SnapshotVersion.$javaClass.parse(...args);
	}
}


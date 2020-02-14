declare var Java: any;
import SnapshotVersion from '../../../com/smc/version/SnapshotVersion.js'

export default interface MinecraftVersion {
	getMajor(): number;
	getMinor(): number;
	getBuild(): number;
	getDevelopmentStage(): string;
	getSnapshot(): SnapshotVersion;
	isSnapshot(): boolean;
	isAfter(other: MinecraftVersion): boolean;
	isAfterOrEq(other: MinecraftVersion): boolean;
	isBefore(other: MinecraftVersion): boolean;
	isBeforeOrEq(other: MinecraftVersion): boolean;
	isBetween(o1: MinecraftVersion, o2: MinecraftVersion): boolean;
	getVersion(): string;
	compareTo(arg0: any): number;
	compareTo(that: MinecraftVersion): number;
}

export default class MinecraftVersion {
	public static get $javaClass(): any {
		return Java.type('com.smc.version.MinecraftVersion');
	}
	public static get COMPARATOR(): any {
		return MinecraftVersion.$javaClass.COMPARATOR;
	}
	public static getRuntimeVersion(): MinecraftVersion;
	public static getRuntimeVersion(...args: any[]): any {
		return MinecraftVersion.$javaClass.getRuntimeVersion(...args);
	}
	public static of(major: number, minor: number, build: number): MinecraftVersion;
	public static of(...args: any[]): any {
		return MinecraftVersion.$javaClass.of(...args);
	}
	public static parse(version: string): MinecraftVersion;
	public static parse(version: string, parseSnapshot: boolean): MinecraftVersion;
	public static parse(...args: any[]): any {
		return MinecraftVersion.$javaClass.parse(...args);
	}
}


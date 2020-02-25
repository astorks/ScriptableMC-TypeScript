declare var Java: any;

export default interface Version {
	compareTo(arg0: any): number;
	compareTo(other: Version): number;
	getBuild(): number;
	getMajor(): number;
	getMinor(): number;
	getVersion(): string;
	isAfter(other: Version): boolean;
	isAfterOrEq(other: Version): boolean;
	isBefore(other: Version): boolean;
	isBeforeOrEq(other: Version): boolean;
	isBetween(o1: Version, o2: Version): boolean;
}

export default class Version {
	public static get $javaClass(): any {
		return Java.type('com.smc.version.Version');
	}

	constructor(major: number, minor: number, build: number, $constructor_marker: any);
	constructor(...args: any[]) {
		return new Version.$javaClass(...args);
	}

	public static access$getCOMPARATOR$cp(): any;
	public static access$getCOMPARATOR$cp(...args: any[]): any {
		return Version.$javaClass.access$getCOMPARATOR$cp(...args);
	}

	public static getCOMPARATOR(): any;
	public static getCOMPARATOR(...args: any[]): any {
		return Version.$javaClass.getCOMPARATOR(...args);
	}

	public static of(major: number, minor: number, build: number): Version;
	public static of(...args: any[]): any {
		return Version.$javaClass.of(...args);
	}

	public static parse(version: string): Version;
	public static parse(...args: any[]): any {
		return Version.$javaClass.parse(...args);
	}

}


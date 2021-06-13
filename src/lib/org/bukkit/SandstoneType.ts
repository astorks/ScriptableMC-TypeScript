declare var Java: any;

export default interface SandstoneType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getData(): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class SandstoneType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SandstoneType');
	}

	public static get CRACKED(): SandstoneType {
		return this.$javaClass.CRACKED;
	}
	public static get GLYPHED(): SandstoneType {
		return this.$javaClass.GLYPHED;
	}
	public static get SMOOTH(): SandstoneType {
		return this.$javaClass.SMOOTH;
	}
	public static getByData(data: number): SandstoneType;
	public static getByData(...args: any[]): any {
		return SandstoneType.$javaClass.getByData(...args);
	}

	public static valueOf(arg0: string): SandstoneType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return SandstoneType.$javaClass.valueOf(...args);
	}

	public static values(): Array<SandstoneType>;
	public static values(...args: any[]): any {
		return SandstoneType.$javaClass.values(...args);
	}

}


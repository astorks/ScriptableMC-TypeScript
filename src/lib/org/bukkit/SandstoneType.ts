declare var Java: any;

export default interface SandstoneType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}


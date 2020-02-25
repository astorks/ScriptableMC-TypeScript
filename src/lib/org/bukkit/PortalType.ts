declare var Java: any;

export default interface PortalType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PortalType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.PortalType');
	}

	public static get CUSTOM(): PortalType {
		return this.$javaClass.CUSTOM;
	}
	public static get ENDER(): PortalType {
		return this.$javaClass.ENDER;
	}
	public static get NETHER(): PortalType {
		return this.$javaClass.NETHER;
	}
}


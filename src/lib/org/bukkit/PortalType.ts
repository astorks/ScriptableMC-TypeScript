declare var Java: any;

export default interface PortalType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class PortalType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.PortalType');
	}

	public static get NETHER(): PortalType {
		return this.$javaClass.NETHER;
	}
	public static get ENDER(): PortalType {
		return this.$javaClass.ENDER;
	}
	public static get CUSTOM(): PortalType {
		return this.$javaClass.CUSTOM;
	}
}


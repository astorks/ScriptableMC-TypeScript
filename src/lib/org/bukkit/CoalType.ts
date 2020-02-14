declare var Java: any;

export default interface CoalType {
	getData(): number;
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class CoalType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.CoalType');
	}

	public static get COAL(): CoalType {
		return this.$javaClass.COAL;
	}
	public static get CHARCOAL(): CoalType {
		return this.$javaClass.CHARCOAL;
	}
}


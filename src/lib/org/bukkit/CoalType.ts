declare var Java: any;

export default interface CoalType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getData(): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class CoalType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.CoalType');
	}

	public static get CHARCOAL(): CoalType {
		return this.$javaClass.CHARCOAL;
	}
	public static get COAL(): CoalType {
		return this.$javaClass.COAL;
	}
}


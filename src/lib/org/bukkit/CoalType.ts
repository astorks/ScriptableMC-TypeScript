declare var Java: any;

export default interface CoalType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static getByData(data: number): CoalType;
	public static getByData(...args: any[]): any {
		return CoalType.$javaClass.getByData(...args);
	}

	public static valueOf(arg0: string): CoalType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return CoalType.$javaClass.valueOf(...args);
	}

	public static values(): Array<CoalType>;
	public static values(...args: any[]): any {
		return CoalType.$javaClass.values(...args);
	}

}


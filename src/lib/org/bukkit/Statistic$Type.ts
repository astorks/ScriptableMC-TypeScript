declare var Java: any;

export default interface Statistic$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Statistic$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Statistic$Type');
	}

	public static get BLOCK(): Statistic$Type {
		return this.$javaClass.BLOCK;
	}
	public static get ENTITY(): Statistic$Type {
		return this.$javaClass.ENTITY;
	}
	public static get ITEM(): Statistic$Type {
		return this.$javaClass.ITEM;
	}
	public static get UNTYPED(): Statistic$Type {
		return this.$javaClass.UNTYPED;
	}
	public static valueOf(arg0: string): Statistic$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Statistic$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<Statistic$Type>;
	public static values(...args: any[]): any {
		return Statistic$Type.$javaClass.values(...args);
	}

}


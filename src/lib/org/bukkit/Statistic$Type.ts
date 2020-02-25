declare var Java: any;

export default interface Statistic$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}


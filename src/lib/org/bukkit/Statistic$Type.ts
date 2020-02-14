declare var Java: any;

export default interface Statistic$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Statistic$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Statistic$Type');
	}

	public static get UNTYPED(): Statistic$Type {
		return this.$javaClass.UNTYPED;
	}
	public static get ITEM(): Statistic$Type {
		return this.$javaClass.ITEM;
	}
	public static get BLOCK(): Statistic$Type {
		return this.$javaClass.BLOCK;
	}
	public static get ENTITY(): Statistic$Type {
		return this.$javaClass.ENTITY;
	}
}


declare var Java: any;

export default interface Slab$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Slab$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Slab$Type');
	}

	public static get BOTTOM(): Slab$Type {
		return this.$javaClass.BOTTOM;
	}
	public static get DOUBLE(): Slab$Type {
		return this.$javaClass.DOUBLE;
	}
	public static get TOP(): Slab$Type {
		return this.$javaClass.TOP;
	}
}


declare var Java: any;

export default interface Slab$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Slab$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Slab$Type');
	}

	public static get TOP(): Slab$Type {
		return this.$javaClass.TOP;
	}
	public static get BOTTOM(): Slab$Type {
		return this.$javaClass.BOTTOM;
	}
	public static get DOUBLE(): Slab$Type {
		return this.$javaClass.DOUBLE;
	}
}


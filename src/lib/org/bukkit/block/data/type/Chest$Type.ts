declare var Java: any;

export default interface Chest$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Chest$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Chest$Type');
	}

	public static get SINGLE(): Chest$Type {
		return this.$javaClass.SINGLE;
	}
	public static get LEFT(): Chest$Type {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): Chest$Type {
		return this.$javaClass.RIGHT;
	}
}

